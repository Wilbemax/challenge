/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length;
    const a = [...nums];

  nums.sort((a, b) => a - b);

  let l = 0;
  let r = n - 1;

  while (l < r) {
    const sum = nums[l] + nums[r];

    if (sum === target) {
      break;
    } else if (sum > target) {
      r--;
    } else {
      l++;
    }
  }

  const v = [];

  for (let i = 0; i < n; i++) {
    if (nums[l] === a[i]) {
      v.push(i);
    } else if (nums[r] === a[i]) {
      v.push(i);
    }
  }

  return v;

};
