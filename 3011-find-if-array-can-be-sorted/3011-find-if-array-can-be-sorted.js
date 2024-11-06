/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let setbits1 = nums[i].toString(2).replaceAll('0', '').length
        let setbits2 = nums[j].toString(2).replaceAll('0', '').length;
        if (setbits1 !== setbits2) return false;
      }
    }
  }
  return true;
};