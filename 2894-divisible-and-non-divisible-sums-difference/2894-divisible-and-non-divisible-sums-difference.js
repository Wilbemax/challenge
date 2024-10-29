/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sumN = 0
    let sumM = 0
    
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            sumM += i; // Если число делится на m, добавляем его к num2
        } else {
            sumN += i; // Если число не делится на m, добавляем его к num1
        }
    }
    return sumN - sumM
};