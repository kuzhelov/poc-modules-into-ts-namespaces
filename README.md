## GOAL
This repo demonstrates approach to _progressive_ migration of TS-namespace based logic to modules, with the following criterias being met:
- runtime code works the same way
- typings for the rest of our "namespace-based" code are the same: code base still "believes" that our migrated code is a bunch of namespaces in the global scope.


## MAIN CHALLENGE
Suppose we have repo's code written in TypeScript, with TS namespaces used for types isolation (which are deprecated a while ago). Then suppose that our goal is to fetch _part_ of this code as ES module - specifically, `child.ts`. While doing that, we need to ensure that modularised `child.ts` can still be consumed by rest of the namespace-based code.

The problem arises in scenarios where it is necessary to reference (import) module's functionality by any namespace-based file, as any `import` statement in namespace file transforms it to module and makes it isolated from the rest of the codebase - and, thus, problem spreads further.

Thus, the task is about `modules` code being pluggable to `namespace`-based one, i.e. 
```
TS-namespaces <- ES modules
```


## NOTES
- if we want d.ts maps to be produced, we cannot use awesome-typescript-loader, as it doesn't support this
    - officially recommended loader be `webpack` is `ts-loader`: https://webpack.js.org/guides/typescript/
- `modules` build should precede the rest of build procedures, to ensure that types for module entities will be generated for namespaced code
- `modules` bundle should precede main app's bundle in `<scripts>` section of the app's HTML
- ensure that `modules` files are excluded from the set of the ones that compiled with `module: none` flag (i.e. regular namespace-oriented ones). We will use `.m.ts` extension prefixes for that
- it is necessary to add `generated-types` of `modules` to `.gitignore`


## TODO
- [x] make `package.json` scripts to be platform-independent, test functionality on Windows. Currently is only POSIX-compliant.
- [x] revert code back to the state where everything is operating by namespaces and repeat the steps again, by making clean commits
