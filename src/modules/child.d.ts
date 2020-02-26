// THIS CODE IS NECESSARY TO SHIM TYPESCRIPT TYPES FOR NAMESPACES

// 1. import GENERATED TYPES for module
import * as child from "./generated-types/child";

declare global {
    // 2. provide namespace declaration
    namespace some.nested.namespace {
        // 3. export necesary namespace members using alias declarations
        export import Child = child.Child;
    }
}
