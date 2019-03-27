/**
 * Test utilities
 */

import fs = require('fs-extra');
import spec = require('jsii-spec');
import os = require('os');
import path = require('path');
import { DiagnosticCategory } from 'typescript';
import { Compiler } from '../lib/compiler';
import { loadProjectInfo, ProjectInfo } from '../lib/project-info';

/**
 * Compile a piece of source and return the JSII assembly for it
 */
export async function compile(source: string): Promise<spec.Assembly> {
  // Easiest way to get the source into the compiler is to write it to disk somewhere.
  // I guess we could make an in-memory compiler host but that seems like work...
  return await inTempDir(async () => {
    const fileName = 'index.ts';
    await fs.writeFile(fileName, source, { encoding: 'utf-8' });
    const compiler = new Compiler({ projectInfo: await makeProjectInfo(fileName), watch: false });
    const emitResult = await compiler.emit();

    const errors = emitResult.diagnostics.filter(d => d.category === DiagnosticCategory.Error);
    for (const error of errors) {
      // tslint:disable-next-line:no-console
      console.error(error.messageText);
      // logDiagnostic() doesn't work out of the box, so console.error() it is.
    }
    if (errors.length > 0) { throw new Error('There were compiler errors'); }
    return await fs.readJSON('.jsii', { encoding: 'utf-8' });
  });
}

async function inTempDir<T>(block: () => Promise<T>): Promise<T> {
  const origDir = process.cwd();
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'jsii'));
  process.chdir(tmpDir);
  const ret = await block();
  process.chdir(origDir);
  await fs.remove(tmpDir);
  return ret;
}

/**
 * Obtain project info so we can call the compiler
 *
 * Creating this directly in-memory leads to slightly different behavior from calling
 * jsii from the command-line, and I don't want to figure out right now.
 *
 * Most consistent behavior seems to be to write a package.json to disk and
 * then calling the same functions as the CLI would.
 */
async function makeProjectInfo(types: string): Promise<ProjectInfo> {
  await fs.writeJson('package.json', {
    types,
    main: types.replace(/(?:\.d)?\.ts(x?)/, '.js$1'),
    name: 'testpkg', // That's what package.json would tell if we look up...
    version: '0.0.1',
    license: 'Apache-2.0',
    author: { name: 'John Doe', roles: ['author'] },
    repository: { type: 'git', url: 'https://github.com/awslabs/jsii.git' },
    jsii: {},
  }, { encoding: 'utf-8', spaces: 2 });

  return await loadProjectInfo(path.resolve(process.cwd(), '.'));
}
