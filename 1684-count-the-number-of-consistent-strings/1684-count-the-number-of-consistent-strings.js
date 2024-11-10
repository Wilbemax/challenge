/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let count = 0
    const char = new RegExp(`^[${allowed}]+$`)
    for (let i = 0; i < words.length; i++) {
        if (char.test(words[i])) count++
    }
    return count
};

