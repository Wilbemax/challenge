/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b) => a - b)
    let res = -1

    for(let i = 0; i < nums.length; i++) {
        if (i !== nums[i]) return i 
        else res = i + 1
    }
    return res
};