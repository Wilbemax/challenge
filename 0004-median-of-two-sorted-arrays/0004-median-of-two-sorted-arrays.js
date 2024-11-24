/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const array = [...nums1, ...nums2].sort((a,b) => a - b)
    
    let median = 0
    
    if (array.length % 2 === 0) {
       median = array[Math.floor(array.length / 2)] + array[Math.floor(array.length / 2) - 1]
       return median / 2
    } else {
         median = array[Math.floor(array.length / 2)]
         return median
    }
    
    
};