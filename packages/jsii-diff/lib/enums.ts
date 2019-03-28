import reflect = require('jsii-reflect');
import { Mismatches, shouldInspect } from './types';

export function compareEnum(original: reflect.EnumType, updated: reflect.EnumType, mismatches: Mismatches) {
  for (const origMember of original.members.filter(shouldInspect)) {
    const updatedMember = updated.members.find(m => m.name === origMember.name);
    if (!updatedMember) {
      mismatches.report(original, `member ${origMember.name} has been removed`);
      continue;
    }
  }
}