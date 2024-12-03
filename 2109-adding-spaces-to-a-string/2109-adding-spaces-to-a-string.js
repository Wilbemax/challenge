/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let res = []
    let ctu = 0
    
    for (let i = 0; i < s.length; i ++) {
        if (i === spaces[ctu]) {
            res.push(" ")
            ctu++
        } 
        res.push(s[i])
        
    }
    return res.join('')
};
