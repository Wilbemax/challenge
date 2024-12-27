/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let maxScore = 0
    let maxValues = [0]
    
    
    for (let i = 0; i < values.length; i++) {
        maxScore = Math.max(maxScore, maxValues + values[i] - i)
        
        maxValues = Math.max(maxValues, values[i] + i)
    }
    
    return maxScore
};