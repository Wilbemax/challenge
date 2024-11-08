/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let k = (1 << maximumBit) - 1
    for (let i = 0; i < nums.length; i++) {
        k ^=nums[i]
        nums[i] = k
    }
    return nums.reverse()
};
