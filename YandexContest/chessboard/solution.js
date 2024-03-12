//node.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the value of N: ', (N) => {
    let cells = [];
    let perimeter = 0;

    const is_cut_cell = (row, col) => {
        return cells.some(cell => cell[0] === row && cell[1] === col);
    };

    const check_neighbors = (row, col) => {
        let count = 0;
        if (cells.some(cell => cell[0] === row - 1 && cell[1] === col)) {
            count += 1;
        }
        if (cells.some(cell => cell[0] === row + 1 && cell[1] === col)) {
            count += 1;
        }
        if (cells.some(cell => cell[0] === row && cell[1] === col - 1)) {
            count += 1;
        }
        if (cells.some(cell => cell[0] === row && cell[1] === col + 1)) {
            count += 1;
        }
        return count;
    };

    rl.question('Enter the cells: ', (input) => {
        cells = input.split(' ').map(cell => cell.split(',').map(Number));

        cells.forEach(cell => {
            const [row, col] = cell;
            perimeter += 4 - check_neighbors(row, col);
        });

        console.log(perimeter);
        rl.close();
    });
});



//python
//N = int(input())
// cells = [tuple(map(int, input().split())) for _ in range(N)]
//
// perimeter = 0
//
// def is_cut_cell(row, col):
//     return (row, col) in cells
//
//
// def check_neighbors(row, col):
//     count = 0
//     if (row - 1, col) in cells:
//         count += 1
//     if (row + 1, col) in cells:
//         count += 1
//     if (row, col - 1) in cells:
//         count += 1
//     if (row, col + 1) in cells:
//         count += 1
//     return count
//
// for cell in cells:
//     row, col = cell
//     perimeter += 4 - check_neighbors(row, col)
//
// print(perimeter)