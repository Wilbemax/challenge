const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('', (input) => {
	let nums = input.split(' ').map(Number)

    let arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it

    for (let i = 0; i <= nums.length - 1; i += 2) { // Iterate by 2
      if (arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
  
   
	console.log(arr[arr.length - 1]);
	rl.close();
});