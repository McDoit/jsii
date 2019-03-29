import reflect = require('jsii-reflect');
import log4js = require('log4js');
import { ComparisonContext, shouldInspect } from './types';
import { flatMap } from './util';

const LOG = log4js.getLogger('jsii-diff');

/**
 * Compare two class types
 *
 * We require that all stable properties and methods on the original are
 * present on the new type, and that they match in turn.
 */
export function compareClass(original: reflect.ClassType, updated: reflect.ClassType, context: ComparisonContext) {
  if (updated.abstract && !original.abstract) {
    context.mismatches.report(original, 'has gone from non-abstract to abstract');
  }

  for (const [origMethod, updatedMethod] of memberPairs(original, original.methods, updated, context)) {
    compareMethod(original, origMethod, updatedMethod, context);
  }

  for (const [origProp, updatedProp] of memberPairs(original, original.properties, updated, context)) {
    compareProperty(original, origProp, updatedProp, context);
  }

  // You cannot have added abstract members to the class, as they are
  // an added burden on potential subclass implementors.
  // Strictly speaking,
  if (checkForSubclassing(original)) {
    const absMemberNames = new Set(updated.members.filter(m => m.abstract).map(m => m.name));
    const originalMemberNames = new Set(original.members.map(m => m.name));
    for (const name of absMemberNames) {
      if (!originalMemberNames.has(name)) {
        context.mismatches.report(original, `requires subclasses to implement ${name}`);
      }
    }
  }
}

export function compareInterface(original: reflect.InterfaceType, updated: reflect.InterfaceType, context: ComparisonContext) {
  for (const [origMethod, updatedMethod] of memberPairs(original, original.methods, updated, context)) {
    compareMethod(original, origMethod, updatedMethod, context);
  }

  for (const [origProp, updatedProp] of memberPairs(original, original.properties, updated, context)) {
    compareProperty(original, origProp, updatedProp, context);
  }

  if (original.datatype !== updated.datatype) {
    context.mismatches.report(original, `used to be a ${interfaceType(original.datatype)}, is now a ${interfaceType(updated.datatype)}.`);
  }

  if (checkForSubclassing(original)) {
    // Similar as with classes, implementors should not bear the burden of having
    // to add new mandatory fields. Only do this on types that have been explicitlyt
    // marked for subclassing.

    // FIXME: Implement
  }
}

function interfaceType(dataType: boolean) {
  return dataType ? 'data interface' : 'behavior interface';
}

function compareMethod(origClass: reflect.Type, original: reflect.Method, updated: reflect.Method, context: ComparisonContext) {
  if (original.static !== updated.static) {
    // tslint:disable-next-line:max-line-length
    context.mismatches.report(origClass, `method ${original.name} was ${original.static ? 'static' : 'not static'}, is now ${updated.static ? 'static' : 'not static'}.`);
  }

  const ana = isStrengtheningPostCondition(original.returns, updated.returns);
  if (!ana.success) {
    // tslint:disable-next-line:max-line-length
    context.mismatches.report(origClass, `method ${original.name} used to return ${original.returns}, is now ${updated.returns}: ${ana.reasons.join(', ')}`);
  }

  const updatedParams = updated.parameters;
  original.parameters.forEach((param, i) => {
    // Find the matching parameter
    const updatedParam = findParam(updatedParams, i);
    if (updatedParam === undefined) {
      context.mismatches.report(origClass, `method ${original.name} argument ${param.name}, not accepted anymore.`);
      return;
    }

    const mana = isWeakeningPreCondition(param.type, updatedParam.type);
    if (!mana.success) {
      // tslint:disable-next-line:max-line-length
      context.mismatches.report(origClass, `method ${original.name} argument ${param.name}, used to be of type ${param.type}, is now ${updatedParam.type}: ${mana.reasons.join(', ')}`);
      return;
    }
  });
}

/**
 * Check if a class/interface has been marked as @subclassable
 * @param x
 */
function checkForSubclassing(x: reflect.Documentable) {
  return x.docs.customTag('subclassable') !== undefined;
}

/**
 * Find the indicated parameter with the given index
 *
 * May return the last parameter if it's variadic
 */
function findParam(parameters: reflect.Parameter[], i: number): reflect.Parameter | undefined {
  if (i < parameters.length) { return parameters[i]; }
  const lastParam = parameters.length > 0 ? parameters[parameters.length - 1] : undefined;
  if (lastParam && lastParam.variadic) { return lastParam; }
  return undefined;
}

function compareProperty(origClass: reflect.Type, original: reflect.Property, updated: reflect.Property, context: ComparisonContext) {
  if (original.static !== updated.static) {
    // tslint:disable-next-line:max-line-length
    context.mismatches.report(origClass, `property ${original.name} was ${original.static ? 'static' : 'not static'}, is now ${updated.static ? 'static' : 'not static'}`);
  }

  if (!isStrengtheningPostCondition(original.type, updated.type)) {
    context.mismatches.report(origClass, `property ${original.name} used to be of type ${original.type}, is now ${updated.type}`);
  }

  if (updated.immutable && !original.immutable) {
    context.mismatches.report(origClass, `property ${original.name} used to be mutable, is now immutable`);
  }
}

// tslint:disable-next-line:max-line-length
function* memberPairs<T extends reflect.TypeMember>(origClass: reflect.ClassType | reflect.InterfaceType, xs: T[], updatedClass: reflect.ClassType | reflect.InterfaceType, context: ComparisonContext): IterableIterator<[T, T]> {
  for (const origMember of xs.filter(shouldInspect(context))) {
    LOG.trace(`${origClass.fqn}#${origMember.name}`);

    const updatedMember = updatedClass.members.find(m => m.name === origMember.name);
    if (!updatedMember) {
      context.mismatches.report(origClass, `member ${origMember.name} has been removed`);
      continue;
    }

    if (origMember.kind !== updatedMember.kind) {
      context.mismatches.report(origClass, `member ${origMember.name} changed from ${origMember.kind} to ${updatedMember.kind}`);
      continue;
    }

    yield [origMember, updatedMember as T]; // Trust me I know what I'm doing
  }
}

/**
 * Check whether A is a supertype of B
 *
 * Put differently: whether an value of type B would be assignable to a
 * variable of type A.
 *
 * We always check the relationship in the NEW (latest, updated) typesystem.
 */
function isSuperType(a: reflect.TypeReference, b: reflect.TypeReference, updatedSystem: reflect.TypeSystem): Analysis {
  if (a.void || b.void) { throw new Error('isSuperType() does not handle voids'); }
  if (a.isAny) { return { success: true }; }

  // Optional is in principle the same as a union '| undefined', but we
  // special-case it here because that's easier :). If B is optional, A must be
  // optional as well.
  if (b.optional && !a.optional) {
    return { success: false, reasons: [`${b} is optional, ${a} is not`] };
  }

  if (a.primitive !== undefined) {
    if (a.primitive === b.primitive) { return { success: true }; }
    return { success: false, reasons: [`${b} is not assignable to ${a}`] };
  }

  if (a.arrayOfType !== undefined) {   // Arrays are covariant
    if (b.arrayOfType === undefined) { return { success: false, reasons: [`${b} is not an array type`] }; }
    return prependReason(
      isSuperType(a.arrayOfType, b.arrayOfType, updatedSystem),
      `${b} is not assignable to ${a}`
    );
  }

  if (a.mapOfType !== undefined) {  // Maps are covariant (are they?)
    if (b.mapOfType === undefined) { return { success: false, reasons: [`${b} is not a map type`] }; }
    return prependReason(
      isSuperType(a.mapOfType, b.mapOfType, updatedSystem),
      `${b} is not assignable to ${a}`);
  }

  if (a.promise !== b.promise) { return { success: false, reasons: [`Sync/async mismatch`] }; }

  // Any element of A should accept all of B
  if (a.unionOfTypes !== undefined) {
    const analyses = a.unionOfTypes.map(aaa => isSuperType(aaa, b, updatedSystem));
    if (analyses.some(x => x.success)) { return { success: true }; }
    return { success: false, reasons: [
      `none of ${b} are assignable to ${a}`,
      ...flatMap(analyses, x => x.success ? [] : x.reasons)
    ] };
  }
  // All potential elements of B should go into A
  if (b.unionOfTypes !== undefined) {
    const analyses = b.unionOfTypes.map(bbb => isSuperType(a, bbb, updatedSystem));
    if (analyses.every(x => x.success)) { return { success: true }; }
    return { success: false, reasons: [
      `some of ${b} are not assignable to ${a}`,
      ...flatMap(analyses, x => x.success ? [] : x.reasons)
    ] };
  }

  // For named types, we'll always do a nominal typing relationship.
  // That is, if in the updated typesystem someone were to use the type name
  // from the old assembly, do they have a typing relationship that's accepted
  // by a nominal type system. (That check also rules out enums)
  const nominalCheck = isNominalSuperType(a, b, updatedSystem);
  if (nominalCheck.success === false) { return nominalCheck; }

  // At this point, the types are legal in the updated assembly's type system.
  // However, for structs we also structurally check the fields between the OLD
  // and the NEW type system.
  // We could do more complex analysis on typing of methods, but it doesn't seem
  // worth it.
  const A = a.type!; // Note: lookup in old type system!
  const B = b.type!;
  if (A.isInterfaceType() && A.isDataType() && B.isInterfaceType() && B.datatype) {
    return isStructuralSuperType(A, B, updatedSystem);
  }

  // All seems good
  return { success: true };
}

/**
 * Find types A and B in the updated type system, and check whether they have a supertype relationship in the type system
 */
function isNominalSuperType(a: reflect.TypeReference, b: reflect.TypeReference, updatedSystem: reflect.TypeSystem): Analysis {
  if (a.fqn === undefined) {
    throw new Error(`I was expecting a named type, got '${a}'`);
  }

  // Named type vs a non-named type
  if (b.fqn === undefined) { return { success: false, reasons: [`${b} is not assignable to ${a}`] }; }

  // Short-circuit of the types are the same name, saves us some lookup
  if (a.fqn === b.fqn) { return { success: true }; }

  // We now need to do subtype analysis on the
  // Find A in B's typesystem, and see if B is a subtype of A'
  const B = updatedSystem.tryFindFqn(b.fqn!);
  const A = updatedSystem.tryFindFqn(a.fqn);

  if (!B) { return { success: false, reasons: [`could not find type ${b}`] }; }
  if (!A) { return { success: false, reasons: [`could not find type ${a}`] }; }

  // If they're enums, they should have been exactly the same (tested above)
  // enums are never subtypes of any other type.
  if (A.isEnumType()) { return { success: false, reasons: [`${a} is an enum different from ${b}`] }; }
  if (B.isEnumType()) { return { success: false, reasons: [`${b} is an enum different from ${a}`] }; }

  if (B.extends(A)) { return { success: true }; }
  return { success: false, reasons: [`${b} does not extend ${a}`] };
}

/**
 * Is struct A a structural supertype of struct B?
 *
 * Trying to answer the question, is this assignment legal for all values
 * of `expr in B`.
 *
 * ```ts
 * const var: A = expr as B;
 * ```
 *
 * A is a structural supertype of B if all required members of A are also
 * required in B, and of a compatible type.
 *
 * Optional members of A must either not exist in B, or be of a compatible
 * type.
 */
function isStructuralSuperType(a: reflect.InterfaceType, b: reflect.InterfaceType, updatedSystem: reflect.TypeSystem): Analysis {
  // We know all members can only be properties, so that makes it easier.
  const bProps = b.getProperties(true);
  for (const [name, aProp] of Object.entries(a.getProperties(true))) {
    const bProp = bProps[name];

    if (aProp.type.optional) {
      // Optional field, only requirement is that IF it exists, the type must match.
      if (!bProp) { continue; }
    } else {
      if (!bProp) { return { success: false, reasons: [`required property '${name}' is missing in ${b}`] }; }
      if (bProp.type.optional) { return { success: false, reasons: [`required property '${name}' is optional in ${b}`] }; }
    }

    const ana = isSuperType(aProp.type, bProp.type, updatedSystem);
    if (!ana.success) { return ana; }
  }

  return { success: true };
}

// Oh tagged union types I love you so much!
export type Analysis =
      { success: true; }
    | { success: false; reasons: string[]; };

function prependReason(analysis: Analysis, message: string): Analysis {
  if (analysis.success) { return analysis; }
  return { success: false, reasons: [message, ...analysis.reasons] };
}

/**
 * Whether we are strengthening the postcondition (output type of a method or property)
 *
 * Strengthening postconditions is allowed!
 */
function isStrengtheningPostCondition(original: reflect.TypeReference, updated: reflect.TypeReference): Analysis {
  if (original.void) { return { success: true }; }  // If we didn't use to return anything, returning something now is fine
  if (updated.void) { return { success: false, reasons: [`now returning 'void'`] }; } // If we used to return something, we can't stop doing that
  return isSuperType(original, updated, updated.system);
}

/**
 * Whether we are weakening the pre (input type of a method)
 *
 * Weakening preconditions is allowed!
 */
function isWeakeningPreCondition(original: reflect.TypeReference, updated: reflect.TypeReference): Analysis {
  // Input can never be void, so no need to check
  return isSuperType(updated, original, updated.system);
}