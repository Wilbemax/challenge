/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    res = []
    for (var i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1] && s[i] === s[i + 2] && i <= s.length - 3) {
            continue
        }
        res.push(s[i])
    }
    return res.join('')
};
