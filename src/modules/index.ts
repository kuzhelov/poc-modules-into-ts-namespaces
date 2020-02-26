import { shimModuleToGlobalNamespace } from './utils'

// CODE BELOW IS NECESSARY TO SHIM MODULES' LOGIC TO PROPER NAMESPACE GLOBAL OBJECTS

// 1. import module
import * as child from './child'

// 2. use utility method, provide module and namespace as args.
shimModuleToGlobalNamespace(child, 'some.nested.namespace');
