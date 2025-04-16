const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf8');

const lines = fileContent
    .toString()
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '');

const [k1, m, k2, p2, n2] = lines[0].split(" ").map(Number)

fs.writeFileSync('output.txt', 'da');
