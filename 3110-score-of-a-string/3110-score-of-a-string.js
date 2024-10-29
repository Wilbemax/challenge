/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    var sum = 0
    var prev = s.charCodeAt(0)
    for (let i = 1; i < s.length; i++){
        sum += Math.abs(prev - s.charCodeAt(i))
        prev = s.charCodeAt(i)
    }
    return sum
};