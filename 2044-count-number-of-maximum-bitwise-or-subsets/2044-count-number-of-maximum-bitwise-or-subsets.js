/**
 * @param {number[]} nums
 * @return {number}
 */
function countMaxOrSubsets(nums) {
    let maxBinaryOR = 0;
    
    
    for (let num of nums) {
        maxBinaryOR |= num;
    }
    
    let count = 0;
    
   
    function findSubsets(i, currentOr) {
        if (i === nums.length) {
          
            if (currentOr === maxBinaryOR) {
                count++;
            }
            return;
        }
        
        
        findSubsets(i + 1, currentOr | nums[i]); 
        findSubsets(i + 1, currentOr);          
    }
    
    findSubsets(0, 0); 
    return count;
}
