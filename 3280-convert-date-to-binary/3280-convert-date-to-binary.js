/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    const dataInArray = date.split('-').map((item) => {
        return (+item >>> 0).toString(2)
    }).join("-")

    return dataInArray
};