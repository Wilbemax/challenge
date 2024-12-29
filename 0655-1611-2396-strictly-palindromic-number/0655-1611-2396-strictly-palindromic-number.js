/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
    for (let i = 2; i <= n - 2; i++) {
        const currNumber = n.toString(i)
        if (currNumber !== currNumber.split("").reverse().join("")) {
            return false
        }
    }
    return true
};