/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let operation = 0
    for (let num of nums) {
       while (num % 3 !== 0) {
            if ((num - 1) % 3 === 0) {
                num -= 1;
            } else {
                num += 1;
            }
            operation++;
        }

    }
    return operation
};