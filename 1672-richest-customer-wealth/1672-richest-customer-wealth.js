/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let maxValue = 0

    for (let i = 0; i < accounts.length; i++) {
        const value = accounts[i].reduce((acc, cur) => acc + cur, 0)
        if (value > maxValue) maxValue = value
    }
    return maxValue
};