const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: true,
});

const lines = [];

rl.on('line', (line) => {
	if (line.trim() === '') {
		rl.close();
	} else {
		lines.push(line);
	}
});

rl.on('close', () => {
	if (lines.length < 2) {
		console.error('Ошибка: Необходимо ввести две строки.');
		process.exit(1);
	}
	const [k, n] = lines[0].split(' ').map(Number);
	const dominos = lines[1].split(' ').map(Number);

	console.log(dominos);
	console.log(solution(k, dominos));
});

const solution = (k, dominos) => {
	let lena_soccer = 0,
		sasha_soccer = 0;

	for (let num of dominos) {
		if (num % 5 === 0) lena_soccer++;
		if (num % 3 === 0) sasha_soccer++;

		if (lena_soccer === k) return 'Lena';
		if (sasha_soccer === k) return 'Sasha';
	}

	return 'Draw';
};
