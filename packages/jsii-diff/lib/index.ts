import reflect = require('jsii-reflect');
import { compareClass, compareInterface } from './classes-ifaces';
import { compareEnum } from './enums';
import { describeType, Mismatches, shouldInspect } from './types';

/**
 * Compare two assemblies
 *
 * We currently only check for compatibility (a full diff is
 * harder :). The only thing we have to do is check for every API
 * item whether it's still available and has the same shape (or
 * bigger) in the new API.
 */
export function compareAssemblies(original: reflect.Assembly, updated: reflect.Assembly): Mismatches {
  const ret = new Mismatches();

  compareClasses(original, updated, ret);
  compareInterfaces(original, updated, ret);
  compareEnums(original, updated, ret);

  return ret;
}

export function compareClasses(original: reflect.Assembly, updated: reflect.Assembly, mismatches: Mismatches) {
  for (const [origClass, updatedClass] of typePairs(original.classes, updated, mismatches)) {
    compareClass(origClass, updatedClass, mismatches);
  }
}

export function compareInterfaces(original: reflect.Assembly, updated: reflect.Assembly, mismatches: Mismatches) {
  for (const [origIface, updatedIface] of typePairs(original.interfaces, updated, mismatches)) {
    compareInterface(origIface, updatedIface, mismatches);
  }
}

export function compareEnums(original: reflect.Assembly, updated: reflect.Assembly, mismatches: Mismatches) {
  for (const [origEnum, updatedEnum] of typePairs(original.enums, updated, mismatches)) {
    compareEnum(origEnum, updatedEnum, mismatches);
  }
}

function* typePairs<T extends reflect.Type>(xs: T[], updatedAssembly: reflect.Assembly, mismatches: Mismatches): IterableIterator<[T, T]> {
  for (const origType of xs.filter(shouldInspect)) {
    const updatedType = updatedAssembly.tryFindType(origType.fqn);
    if (!updatedType) {
      mismatches.report(origType, 'has been removed');
      continue;
    }

    if (describeType(origType) !== describeType(updatedType)) {
      mismatches.report(origType, `has been turned into a ${describeType(updatedType)}`);
      continue;
    }

    yield [origType, updatedType as T]; // Trust me I know what I'm doing
  }
}