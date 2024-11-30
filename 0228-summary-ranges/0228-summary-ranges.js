/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let l = 0
    let r = 0
    let n = nums.length
    let res = []
    
    while (l < n) {
        
        
        if (nums[r + 1] === nums[r] + 1){
            r++
        } else {
            if (Math.abs(l - r) === 0){
                res.push(String(nums[l]))
                
            } else {
                 res.push(`${nums[l]}->${nums[r]}`)
            }
           
            l = r + 1
            r = r + 1
        }
    }
    return res
};
