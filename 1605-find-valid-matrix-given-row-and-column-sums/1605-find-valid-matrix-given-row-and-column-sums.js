/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    const res = Array.from({ length: rowSum.length }, () => new Array(colSum.length).fill(0));
   
    const lengthRow = rowSum.length
    const lengthCol = colSum.length

    for (i = 0; i < lengthRow; i++) {          
        for(j = 0; j < lengthCol; j++) {
            let value = Math.min(rowSum[i], colSum[j])
            res[i][j] = value
            rowSum[i] -= value
            colSum[j] -= value
        }
    }
    return res
};