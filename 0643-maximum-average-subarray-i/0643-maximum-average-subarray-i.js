/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let n = nums.length
    
    let currSum = 0
    for (let i = 0; i < k; i++) {
        currSum += nums[i]
    } 
    
    
    let maxResult = currSum
    
    for (let i = k; i < n; i++){
        currSum = currSum - nums[i - k] + nums[i]
        maxResult = Math.max(maxResult, currSum)
    } 
    
    return maxResult / k
    
};