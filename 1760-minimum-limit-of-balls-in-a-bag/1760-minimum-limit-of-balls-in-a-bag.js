/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let maxNumber = Math.max(...nums)
    let iterations = 1
    
    while ( iterations <= maxNumber) {
        let middle  = Math.floor((maxNumber - iterations) / 2 + iterations)
        let count = 0
        
        for (let i = 0; i < nums.length; i++) {
            count += Math.floor((nums[i] - 1) /  middle)
        }
        
         if ( count <= maxOperations) {
         maxNumber = middle - 1
             
         } else { 
             iterations = middle + 1
         }
    }
    return iterations
};