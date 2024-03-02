/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
      
    var ans = new Array(nums.length);
   //записываем в arr с игдексом i значение, которое находитсья в массиве nums с индексом полученным из nums[i]
    for (var i = 0; i < nums.length; i++) {
      
        ans[i] = nums[nums[i]];
    }
    return ans;
};