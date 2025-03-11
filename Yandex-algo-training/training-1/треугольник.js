const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", "utf8");

const lines = fileContent.toString().split('\n').map(line => line.trim()).filter(line => line !== '');

const [a, b, c] = lines.map(Number);

const isTrianglePossible = (a + b > c) && (a + c > b) && (b + c > a);

fs.writeFileSync("output.txt", isTrianglePossible ? "YES" : "NO");