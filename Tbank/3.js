const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let a;

rl.on('line', (input) => {
    if (!n) {
        n = parseInt(input);
    } else {
        a = input.split(' ').map(Number);
        solve(n, a);
        rl.close();
    }
});

function solve(n, a) {
    console.log(a)
    const uniqueValues = new Set();

    for (let num of a) {
        let current = num;
        while ( uniqueValues.has(current) && current > 0) {
            current = Math.floor(current / 2);
        }
        uniqueValues.add(current);
    }

    return uniqueValues.size;
}