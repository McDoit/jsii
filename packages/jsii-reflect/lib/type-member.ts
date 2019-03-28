import { Documentable } from "./docs";

export interface TypeMember extends Documentable {
  name: string;
  kind: MemberKind;
}

export enum MemberKind {
  Method = 'method',
  Property = 'property'
}