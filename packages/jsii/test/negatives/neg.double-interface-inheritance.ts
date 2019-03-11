///!MATCH_ERROR: Interface extends the same interface twice

export interface A {
  foo: number;
}

export interface B extends A {
  boo: number;
}

export interface C extends A, B {
  hoo: number;
}