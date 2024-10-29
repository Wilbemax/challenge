/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
 let nullCel = parseFloat(celsius.toFixed(2))
    let kelvin = nullCel + 273.15
    let Fahrenheit = nullCel * 1.80 + 32.00
    let ans = [kelvin, Fahrenheit]
    return ans
};