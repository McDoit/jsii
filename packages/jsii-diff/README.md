# jsii-diff

__jsii-diff__ compares two jsii assemblies for compatibility.

In the future, it will be able to do generic comparisons, but for
now it will compare assemblies for API compatibility, and exit
with a non-zero exit code if any **stable** APIs have had incompatible
changes.

API items that have no stability are treated as **experimental** (i.e.,
do not affect API compatibility.

## License

__jsii-diff__ is distributed under the
[Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

See [LICENSE](./LICENSE) and [NOTICE](./NOTICE) for more information.
