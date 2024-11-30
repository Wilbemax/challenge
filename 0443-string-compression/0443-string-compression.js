/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0;
    let l = 0;
    
    while (l < chars.length) {
        let r = l;
        
        while (r + 1 < chars.length && chars[r] === chars[r + 1]) {
            r++;
        }
        
        let windowSize = r - l + 1;
        chars[write++] = chars[l];
        
        if (windowSize > 1) {
            for (let digit of String(windowSize)) {
                chars[write++] = digit;
            }
        }
        
        l = r + 1;
    }
    
    return write;
};
