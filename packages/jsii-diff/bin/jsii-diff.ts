import fs = require('fs-extra');
import reflect = require('jsii-reflect');
import yargs = require('yargs');
import { compareAssemblies } from '../lib';
import { VERSION } from '../lib/version';

async function main(): Promise<number> {
  const argv = yargs
      .env('JSII_DIFF')
      .usage('$0 <original> [updated]', 'Compare two JSII assemblies.', args => args
        .positional('original', {
          description: 'Original assembly (file or package)',
          type: 'string'
        })
        .positional('updated', {
          description: 'New assembly (file or package)',
          type: 'string',
          default: '.'
        })
      )
      .help()
      .version(VERSION)
      .argv;

  const original = await loadAssembly((argv as any).original);
  const updated = await loadAssembly((argv as any).updated);

  if (original.name !== updated.name) {
    process.stderr.write(`Look like different assemblies: '${original.name}' vs '${updated.name}'. Comparing is probably pointless...`);
  }

  const mismatches = compareAssemblies(original, updated);

  if (mismatches.count > 0) {
    process.stderr.write(`Original assembly: ${original.name}@${original.version}\n`);
    process.stderr.write(`Updated assembly:  ${updated.name}@${updated.version}\n`);
    process.stderr.write(`API elements with incompatible changes:\n`);
    for (const msg of mismatches.messages()) {
      process.stderr.write(`- ${msg}`);
    }

    return 1;
  }

  return 0;
}

async function loadAssembly(name: string) {
  const stat = await fs.stat(name);

  const ts = new reflect.TypeSystem();
  if (stat.isDirectory()) {
    return await ts.loadModule(name);
  } else {
    return await ts.loadFile(name, true);
  }
}

main().then(n => {
  process.exit(n);
}).catch(e => {
  // tslint:disable-next-line:no-console
  console.error(e);
  process.exit(1);
});
