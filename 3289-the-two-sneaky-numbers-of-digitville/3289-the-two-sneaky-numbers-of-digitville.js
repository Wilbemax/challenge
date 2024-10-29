/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const seen = new Set();
    const result = [];
    
    for (let num of nums) {
        if (seen.has(num)) {
            result.push(num);
        } else {
            seen.add(num);
        }
        
        if (result.length === 2) {
            break;
        }
    }
    
    return result;
};