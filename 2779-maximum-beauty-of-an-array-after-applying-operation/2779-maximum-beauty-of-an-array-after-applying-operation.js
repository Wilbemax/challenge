/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
  nums.sort((a, b) => a - b);
  let ans = 0, n = nums.length;
  
  for (let j = 0, i = 0; j < n; j++) {
    while (nums[j] - nums[i] > k * 2) i++;
    
    ans = Math.max(ans, j - i + 1);
    
  }
  return ans;
}