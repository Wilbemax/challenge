/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false
    // if (s === goal) return true
    // let helpString = s.split('')
    // for (let i = 0; i < goal.length; i++) {
    //     if (helpString.join('') !== goal) {
    //         firstLetter = helpString[0]
    //         helpString.shift()
    //         helpString.push(firstLetter)
    //     } else return true
    // }
    // return false

    return s.concat(s).includes(goal)
};
