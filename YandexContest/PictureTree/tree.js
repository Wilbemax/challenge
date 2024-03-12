// node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input) => {
  const [p, v, q, m] = input.split(' ').map(Number);
  const result = 2 * (v + m + 1) - Math.max(0, Math.min(p + v, q + m) - Math.max(p - v, q - m) + 1);
  console.log(result);
  rl.close();
});


// python

// p, v = map(int, input().split())
// q, m = map(int, input().split())
//
// result = 2 * (v + m + 1) - max(0, min(p + v, q + m) - max(p - v, q - m) + 1)
// print(result)
