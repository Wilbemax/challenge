/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var nums  = []

    for(var i = 0; i < arr.length; i +=size ){
        nums.push(arr.slice(i, i+ size))
    }


    return nums
};
