/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
let res = 0
    
    for (let i = 0; i < s.length - 1; i += 2) {
        s[i] !== s[i + 1] ? res += 1 : res
    }
   return res
 };
