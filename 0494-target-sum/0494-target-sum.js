/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
 var findTargetSumWays = function(nums, S) {
    
    if(!nums.length) return 0;
    
    let dp = {};
    
    dp[nums[0]] = 1;
    dp[-nums[0]] = 1;
    
    for(let i = 1; i < nums.length; i++) {
        
        const newDp = {}, el = nums[i];
        
        for(const sum in dp) {
            
            for(const nextSum of [+sum + el, +sum - el]) {
                
                newDp[nextSum] = (newDp[nextSum] || 0) + dp[sum];
            } 
        }
        dp = newDp;
    }
    
    const ans = dp[S] || 0;
    
     
    return nums[0] === 0 ? 2 * ans : ans;
};