/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    let prevLetter = word[0]
    let res = ''
    let count = 0
    for (let i = 0; i <= word.length; i++) {
        if (prevLetter === word[i] && count < 9) {
            count++
        } else {
            res += `${count}${prevLetter}`
            prevLetter = word[i]
            count = 1
        }
    }
    return res
};