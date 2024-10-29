/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const addressArray = address.split('')
    let str = ''
    for(num of addressArray) {
        if (num === '.'){
            str += '[.]'
        }else {
            str += num
        }
    }
    return str
};