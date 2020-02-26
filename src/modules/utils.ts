// UTILITY METHOD
export const shimModuleToGlobalNamespace = (shimmedModule: any, namespace: string) => {
    if (!namespace) {
        throw "Namespace is not specified."
    }

    const windowAsAny = window as any;

    const namespaceTokens = namespace.split('.')

    let penultimateGlobal = null
    namespaceTokens.reduce((globalObject, token) => {
        penultimateGlobal = globalObject

        globalObject[token] = globalObject[token] || {}
        return globalObject[token]
    }, windowAsAny)

    if (!penultimateGlobal) {
        throw "OOPS, we shouldn't be here."
    }

    penultimateGlobal[namespaceTokens[namespaceTokens.length - 1]] = {
        ...penultimateGlobal[namespaceTokens[namespaceTokens.length - 1]],
        ...shimmedModule
    }
}
