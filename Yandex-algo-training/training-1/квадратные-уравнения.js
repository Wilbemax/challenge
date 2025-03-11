const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf8');

const lines = fileContent
	.toString()
	.split('\n')
	.map((line) => line.trim())
	.filter((line) => line !== '');

const [a, b, c] = lines;

function solveEquation(a, b, c) {
	if (+c < 0) {
		return 'NO SOLUTION';
	}

	const rightSide = c * c;

	if (+a === 0) {
		if (+b === rightSide) {
			return 'MANY SOLUTIONS';
		} else {
			return 'NO SOLUTION';
		}
	}

	const numerator = rightSide - b;
	if (numerator % +a !== 0) {
		return 'NO SOLUTION';
	}

	return (numerator / +a).toString();
}

const res = solveEquation(a, b, c);

fs.writeFileSync('output.txt', res);
