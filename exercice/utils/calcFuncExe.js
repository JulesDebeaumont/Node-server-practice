/**
 * Calcul le temps d'execution d'une fonction fléchêe
 * @param {function} functionName
 * @returns {void}
 */
 function calculateFunctionTime(functionName) {
    console.time('functionName()')
    functionName()
    console.timeEnd('functionName()')
}

module.exports = { calculateFunctionTime }
