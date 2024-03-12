

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


