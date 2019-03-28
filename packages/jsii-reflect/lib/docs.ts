import jsii = require('jsii-spec');
import { TypeSystem } from './type-system';

export interface Documentable {
  docs: Docs;

  /**
   * Return the reason for deprecation of this type
   */
  deprecationReason: string | undefined;
  isDeprecated: boolean;
  stability: jsii.Stability | undefined;
}

export class Docs {
  constructor(
    public readonly system: TypeSystem,
    public readonly target: Documentable,
    private readonly spec?: jsii.Docs) { }

  public get docs() {
    return this.spec || { };
  }

  public toString() {
    const ret = new Array<string>();
    if (this.docs.summary) { ret.push(this.docs.summary); }
    if (this.docs.remarks) { ret.push('', this.docs.remarks); }
    return ret.join('\n');
  }
}