import { sourceToAssemblyHelper  } from 'jsii';
import reflect = require('jsii-reflect');
import { Test } from 'nodeunit';
import { compareAssemblies } from '../lib';
import { Mismatches } from '../lib/types';

export = {
  // ----------------------------------------------------------------------

  async 'okay to add a new class'(test: Test) {
    await expectNoError(test, `
      export class Foo1 { }
    `, `
      export class Foo1 { }
      export class Foo2 { }
    `);
    test.done();
  },

  // ----------------------------------------------------------------------

  async 'okay to add a new function to a class'(test: Test) {
    await expectNoError(test, `
      export class Foo { }
    `, `
      export class Foo {
        public foo(): void { }
      }
    `);

    test.done();
  },

  // ----------------------------------------------------------------------

  async 'okay to add an argument to a method'(test: Test) {
    await expectNoError(test, `
      export class Foo {
        public foo(arg1: string): void {
          Array.isArray(arg1);
        }
      }
    `, `
      export class Foo {
        public foo(arg1: string, arg2: string): void {
          Array.isArray(arg1);
          Array.isArray(arg2);
        }
      }
    `);

    test.done();
  },

  // ----------------------------------------------------------------------

  async 'okay to make a required argument optional'(test: Test) {
    await expectNoError(test, `
      export class Foo {
        public foo(arg1: string, arg2: string): void {
          Array.isArray(arg1);
          Array.isArray(arg2);
        }
      }
    `, `
      export class Foo {
        public foo(arg1: string, arg2?: string): void {
          Array.isArray(arg1);
          Array.isArray(arg2);
        }
      }
    `);

    test.done();
  },

  // ----------------------------------------------------------------------

  async 'not allowed to change argument type to a different scalar'(test: Test) {
    await expectError(test,
      /arg1, used to be of type/,
      `
      export class Foo {
        public foo(arg1: string): void {
          Array.isArray(arg1);
        }
      }
    `, `
      export class Foo {
        public foo(arg1: number): void {
          Array.isArray(arg1);
        }
      }
    `);

    test.done();
  },

  // ----------------------------------------------------------------------

  async 'cannot add required fields to an input struct'(test: Test) {
    await expectError(test,
      /required property 'super' is missing/,
      `
      export interface Henk {
        readonly henk: string;
      }
      export class Foo {
        public foo(arg1: Henk): void {
          Array.isArray(arg1);
        }
      }
    `, `
      export interface Henk {
        readonly henk: string;
        readonly super: string;
      }
      export class Foo {
        public foo(arg1: Henk): void {
          Array.isArray(arg1);
        }
      }
    `);

    test.done();
  },

  // ----------------------------------------------------------------------

  async 'can add required fields to an output struct'(test: Test) {
    await expectNoError(test,
      `
      export interface Henk {
        readonly henk: string;
      }
      export class Foo {
        public foo(): Henk {
          return { henk: 'henk' };
        }
      }
    `, `
      export interface Henk {
        readonly henk: string;
        readonly super: string;
      }
      export class Foo {
        public foo(): Henk {
          return { henk: 'henk', super: 'super' };
        }
      }
    `);

    test.done();
  },

  // ----------------------------------------------------------------------

  async 'can change argument type to a supertype if it adds only optional fields'(test: Test) {
    await expectNoError(test,
      `
      export interface Henk {
        readonly henk: string;
      }
      export class Foo {
        public foo(arg1: Henk): void {
          Array.isArray(arg1);
        }
      }
    `, `
      export interface Super {
        readonly super?: string;
      }
      export interface Henk extends Super {
        readonly henk: string;
      }
      export class Foo {
        public foo(arg1: Super): void {
          Array.isArray(arg1);
        }
      }
    `);

    test.done();
  },

  // ----------------------------------------------------------------------

  async 'cannot change argument type to a supertype it adds required fields'(test: Test) {
    await expectError(test,
      /required property 'super' is missing/,
      `
      export interface Henk {
        readonly henk: string;
      }
      export class Foo {
        public foo(arg1: Henk): void {
          Array.isArray(arg1);
        }
      }
    `, `
      export interface Super {
        readonly super: string;
      }
      export interface Henk extends Super {
        readonly henk: string;
      }
      export class Foo {
        public foo(arg1: Super): void {
          Array.isArray(arg1);
        }
      }
    `);

    test.done();
  },
};

async function expectNoError(test: Test, original: string, updated: string) {
    const mms = await compare(original, updated);
    for (const msg of mms.messages()) {
      // tslint:disable-next-line:no-console
      console.error(`- ${msg}`);
    }
    test.equal(0, mms.count);
}

async function expectError(test: Test, error: RegExp, original: string, updated: string) {
    const mms = await compare(original, updated);
    test.equal(1, mms.count);

    const msgs = Array.from(mms.messages());
    test.ok(error.test(msgs[0]), `Expected error like ${error}, got ${msgs[0]}`);
}

async function compare(original: string, updated: string): Promise<Mismatches> {
  const ts1 = new reflect.TypeSystem();
  const originalAssembly = ts1.addAssembly(new reflect.Assembly(ts1, await sourceToAssemblyHelper(original)));

  const ts2 = new reflect.TypeSystem();
  const updatedAssembly = ts2.addAssembly(new reflect.Assembly(ts2, await sourceToAssemblyHelper(updated)));

  const mismatches = new Mismatches();
  compareAssemblies(originalAssembly, updatedAssembly, {
    mismatches,
    defaultStable: true // Default stable so tests are less noisy (don't need to write @stable everywhere)
   });

  return mismatches;
}