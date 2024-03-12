// node.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the value of K: ', (K) => {
    let min_x = Infinity;
    let max_x = -Infinity;
    let min_y = Infinity;
    let max_y = -Infinity;

    const processInput = () => {
        rl.question('Enter the values of x and y separated by a space: ', (input) => {
            const [x, y] = input.split(' ').map(Number);
            min_x = Math.min(min_x, x);
            max_x = Math.max(max_x, x);
            min_y = Math.min(min_y, y);
            max_y = Math.max(max_y, y);

            if (K > 1) {
                K--;
                processInput();
            } else {
                console.log(min_x, min_y, max_x, max_y);
                rl.close();
            }
        });
    };

    processInput();
});



//python


// K = int(input())
// min_x = float('inf')
// max_x = float('-inf')
// min_y = float('inf')
// max_y = float('-inf')
//
// for _ in range(K):
//     x, y = map(int, input().split())
//     min_x = min(min_x, x)
//     max_x = max(max_x, x)
//     min_y = min(min_y, y)
//     max_y = max(max_y, y)
//
// print(min_x, min_y, max_x, max_y)

