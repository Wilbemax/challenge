/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const arryResult = new Array(functions.length)
        let count = 0


        functions.forEach((fn, i) => {
            fn().then(val => {
                arryResult[i] = val
                count++
                if (count === functions.length) resolve(arryResult)
                // {count === functions.length && resolve(arrayResult)}
            }).catch(e => reject(e))

        })
    })

};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */