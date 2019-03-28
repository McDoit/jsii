import reflect = require('jsii-reflect');
import spec = require('jsii-spec');

export interface ApiMismatch {
  message: string;
  type: reflect.Type;
}

export class Mismatches {
  public mismatches = new Array<ApiMismatch>();

  public report(type: reflect.Type, message: string) {
    this.mismatches.push({ message, type });
  }

  public* messages() {
    for (const mis of this.mismatches) {
      yield `${describeType(mis.type)} ${mis.type.fqn} ${mis.message}`;
    }
  }

  public get count() {
    return this.mismatches.length;
  }
}

export function describeType(type: reflect.Type) {
  if (type.isClassType()) { return 'CLASS'; }
  if (type.isInterfaceType()) { return 'IFACE'; }
  if (type.isEnumType()) { return 'ENUM'; }
  return 'TYPE';
}

export function shouldInspect(x: reflect.Documentable) {
  return x.docs.stability === spec.Stability.Stable;
}