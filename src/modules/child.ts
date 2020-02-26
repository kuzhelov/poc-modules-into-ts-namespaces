// OVERALL STRATEGY
//
// 1. Make code to be ES module (in this file)
// 2. Declare _type_ shims for TS namespaces used by the rest of the code (in child.d.ts)
// 3. Define module's logic to be attached to global window object, so it could be consumed by the code that is relying on TS namespaces (in index.ts)

export class Child {
    start(): string {
        return "Modularised Child is successfully loaded 👌"
    }
}
