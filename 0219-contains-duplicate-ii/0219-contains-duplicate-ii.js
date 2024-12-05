/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let mapSet = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (mapSet.has(nums[i]) && (i - mapSet.get(nums[i]) <= k)) return true
        mapSet.set(nums[i], i)
    }
    return false
};