/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
const findMaximum = (grid, x, y) => {
    let maxNumber = 0

    for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
            maxNumber = Math.max(maxNumber, grid[i][j])
        }
    }
    return maxNumber
}

var largestLocal = function (grid) {
    let N = grid.length - 2
    const matrix = new Array(grid.length - 2).fill(0)
        .map(() => new Array(grid[0].length - 2).fill(0));


    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            matrix[i][j] = findMaximum(grid, i, j)
        }
    }
    return matrix
};