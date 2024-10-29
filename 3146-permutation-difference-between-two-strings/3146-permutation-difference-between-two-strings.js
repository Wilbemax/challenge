/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
    let res = 0;
    for (let j = 0; j < s.length; j++) {
        const i = t.split('').findIndex((item) => s[j] === item);
        if (i !== -1) {  
            res += Math.abs(j - i);
        }
    }
    return res;
};