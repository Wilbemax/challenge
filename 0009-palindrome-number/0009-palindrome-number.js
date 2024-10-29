/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0  && x != 0 )){
        return false
    }else{
       let revers = x.toString().split('').reverse().join('')
       if (revers == x){
           return true
       } else{
           return false
       }
    }
};