/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
    let j = 0
    let i = 0

    function lessChar(char) {
        if (char == 'a') return 'z'
        return String.fromCharCode(char.charCodeAt(0) - 1)
    }

    while (i < str1.length && j < str2.length) {
        if (str1[i] == str2[j] || str1[i] == lessChar(str2[j])) {
            j++
        }
        i++
    }
    return j == str2.length
};