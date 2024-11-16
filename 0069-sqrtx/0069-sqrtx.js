/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 1
    let end =Math.floor(x/2);
    let mid = -1
    
    if (x === 0 || x === 1) return x
    
    while ( start <= end) {
        mid = Math.floor(start + (end - start) / 2)
        if (mid * mid === x) return mid
        else if ( mid * mid < x) start = mid + 1
        else end = mid - 1
    }
    
    return end
    
}
