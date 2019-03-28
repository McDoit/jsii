import reflect = require('jsii-reflect');
import { Mismatches, shouldInspect } from './types';

/**
 * Compare two class types
 *
 * We require that all stable properties and methods on the original are
 * present on the new type, and that they match in turn.
 */
export function compareClass(original: reflect.ClassType, updated: reflect.ClassType, mismatches: Mismatches) {
  if (updated.abstract && !original.abstract) {
    mismatches.report(original, 'has gone from non-abstract to abstract');
  }

  for (const [origMethod, updatedMethod] of memberPairs(original, original.methods, updated, mismatches)) {
    compareMethod(original, origMethod, updatedMethod, mismatches);
  }

  for (const [origProp, updatedProp] of memberPairs(original, original.properties, updated, mismatches)) {
    compareProperty(original, origProp, updatedProp, mismatches);
  }
}

export function compareInterface(original: reflect.InterfaceType, updated: reflect.InterfaceType, mismatches: Mismatches) {
  for (const [origMethod, updatedMethod] of memberPairs(original, original.methods, updated, mismatches)) {
    compareMethod(original, origMethod, updatedMethod, mismatches);
  }

  for (const [origProp, updatedProp] of memberPairs(original, original.properties, updated, mismatches)) {
    compareProperty(original, origProp, updatedProp, mismatches);
  }
}

function compareMethod(origClass: reflect.Type, original: reflect.Method, updated: reflect.Method, mismatches: Mismatches) {
  if (original.static !== updated.static) {
    // tslint:disable-next-line:max-line-length
    mismatches.report(origClass, `method ${original.name} was ${original.static ? 'static' : 'not static'}, is now ${updated.static ? 'static' : 'not static'}.`);
  }

  if (!isStrengtheningPostCondition(original.returns, updated.returns)) {
    mismatches.report(origClass, `method ${original.name} used to return ${original.returns}, is now ${updated.returns}.`);
  }

  const updatedParams = updated.parameters;
  original.parameters.forEach((param, i) => {
    // Find the matching parameter
    const updatedParam = findParam(updatedParams, i);
    if (updatedParam === undefined) {
      mismatches.report(origClass, `method ${original.name}, argument ${i + 1} (${param.name}) not accepted anymore.`);
      return;
    }

    if (!isWeakeningPreCondition(param.type, updatedParam.type)) {
      // tslint:disable-next-line:max-line-length
      mismatches.report(origClass, `method ${original.name}, argument ${i + 1} (${param.name}) used to be of type ${param.type}, is now ${updatedParam.type}`);
      return;
    }
  });
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

function compareProperty(origClass: reflect.Type, original: reflect.Property, updated: reflect.Property, mismatches: Mismatches) {
  if (original.static !== updated.static) {
    // tslint:disable-next-line:max-line-length
    mismatches.report(origClass, `property ${original.name} was ${original.static ? 'static' : 'not static'}, is now ${updated.static ? 'static' : 'not static'}`);
  }

  if (!isStrengtheningPostCondition(original.type, updated.type)) {
    mismatches.report(origClass, `property ${original.name} used to be of type ${original.type}, is now ${updated.type}`);
  }

  if (updated.immutable && !original.immutable) {
    mismatches.report(origClass, `property ${original.name} used to be mutable, is now immutable`);
  }
}

// tslint:disable-next-line:max-line-length
function* memberPairs<T extends reflect.TypeMember>(origClass: reflect.ClassType | reflect.InterfaceType, xs: T[], updatedClass: reflect.ClassType | reflect.InterfaceType, mismatches: Mismatches): IterableIterator<[T, T]> {
  for (const origMember of xs.filter(shouldInspect)) {
    const updatedMember = updatedClass.members.find(m => m.name === origMember.name);
    if (!updatedMember) {
      mismatches.report(origClass, `member ${origMember.name} has been removed`);
      continue;
    }

    if (origMember.kind !== updatedMember.kind) {
      mismatches.report(origClass, `member ${origMember.name} changed from ${origMember.kind} to ${updatedMember.kind}`);
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
function isSuperType(a: reflect.TypeReference, b: reflect.TypeReference, updatedSystem: reflect.TypeSystem): boolean {
  if (a.void || b.void) { throw new Error('isSuperType() does not handle voids'); }
  if (a.isAny) { return true; }

  // Optional is in principle the same as a union '| undefined', but we
  // special-case it here because that's easier :). If B is optional, A must be
  // optional as well.
  if (b.optional && !a.optional) {
    return false;
  }

  if (a.primitive !== undefined) {
    if (b.primitive === undefined) { return false; }
    return a.primitive === b.primitive; // No subtyping between primitives
  }

  if (a.arrayOfType !== undefined) {   // Arrays are covariant
    if (b.arrayOfType === undefined) { return false; }
    return isSuperType(a.arrayOfType, b.arrayOfType, updatedSystem);
  }

  if (a.mapOfType !== undefined) {  // Maps are covariant (are they?)
    if (b.mapOfType === undefined) { return false; }
    return isSuperType(a.mapOfType, b.mapOfType, updatedSystem);
  }

  if (a.promise !== b.promise) { return false; }

  // Any element of A should accept B
  if (a.unionOfTypes !== undefined) {
    return a.unionOfTypes.some(aaa => isSuperType(aaa, b, updatedSystem));
  }
  // All potential elements of B should go into A
  if (b.unionOfTypes !== undefined) {
    return b.unionOfTypes.every(bbb => isSuperType(a, bbb, updatedSystem));
  }

  if (a.fqn === undefined) {
    throw new Error('I was expecting a named type here');
  }

  // At this point we definitely have a named type
  // Easy shortcut in case we don't have the type definition available, if
  // the names are the same then it's cool.
  if (a.fqn === b.fqn) { return true; }

  // We now need to do subtype analysis on the
  // Find A in B's typesystem, and see if B is a subtype of A'
  const B = updatedSystem.findFqn(b.fqn!);
  const A = updatedSystem.tryFindFqn(a.fqn);
  if (!B || !A) { return false; } // Can't find the types, so not assignable

  return B.extends(A);
}

/**
 * Whether we are strengthening the postcondition (output type of a method or property)
 *
 * Strengthening postconditions is allowed!
 */
function isStrengtheningPostCondition(original: reflect.TypeReference, updated: reflect.TypeReference) {
  if (original.void) { return true; }  // If we didn't use to return anything, returning something now is fine
  if (updated.void) { return false; } // If we used to return something, we can't stop doing that
  return isSuperType(original, updated, updated.system);
}

/**
 * Whether we are weakening the pre (input type of a method)
 *
 * Weakening preconditions is allowed!
 */
function isWeakeningPreCondition(original: reflect.TypeReference, updated: reflect.TypeReference) {
  // Input can never be void, so no need to check
  return isSuperType(updated, original, updated.system);
}