/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let x = []
    let y = []
    let res = []
    for (let i = 0; i < n * 2; i++ ){
        if (i < n) {
            x.push(nums[i])
        } else if ( i >= n) {
            y.push(nums[i])
        }
    }
    
    for (let k = 0; k < n; k++){
        res.push(x[k])
        res.push(y[k])
    }
    return res
};