/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let coincidences = 0

    for (let i = 0; i < jewels.length; i++) {
        for(let j = 0; j < stones.length; j++){
            if (jewels[i] === stones[j]) coincidences++
        }
    }
    return coincidences
};