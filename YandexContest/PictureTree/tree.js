// // const readline = require('readline');

// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

// // function countPaintableTrees(vasyaStart, vasyaV, mashaStart, mashaM) {
// //   const vasyaInterval = new Set([...Array(vasyaStart + vasyaV).keys()].slice(vasyaStart - vasyaV, vasyaStart + vasyaV));
// //   const mashaInterval = new Set([...Array(mashaStart + mashaM).keys()].slice(mashaStart - mashaM, mashaStart + mashaM));

// //   const minStart = Math.min(Math.min(...vasyaInterval), Math.min(...mashaInterval));
// //   const maxEnd = Math.max(Math.max(...vasyaInterval), Math.max(...mashaInterval));

// //   let count = maxEnd - minStart;

// //   if (vasyaInterval.has(0) || mashaInterval.has(0)) {
// //     count--;
// //   }

// //   return count;
// // }

// // function handleInput() {
// //   rl.question((vasyaInput) => {
// //     const [vasyaStart, vasyaV] = vasyaInput.split(' ').map(Number);

// //     rl.question( (mashaInput) => {
// //       const [mashaStart, mashaM] = mashaInput.split(' ').map(Number);

// //       const result = countPaintableTrees(vasyaStart, vasyaV, mashaStart, mashaM);
// //       console.log(result);

// //       rl.close();
// //     });
// //   });
// // }

// // handleInput();

// const nember1 = '0 7';
// const nember2 = '12 5';

// const arr1 = nember1.split(' ').map(Number);
// const arr2 = nember2.split(' ').map(Number);

// let allTree = 0;

// let min1 = arr1[0] - arr1[1] + 1;
// let max1 = arr1[0] + arr1[1] + 1;

// let min2 = arr2[0] - arr2[1] + 1;
// let max2 = arr2[0] + arr2[1] + 1;

// let all1 = arr1[1] * 2 + 1;
// let all2 = arr2[1] * 2 + 1;

// // function countPaintableTrees(vasyaStart, vasyaV, mashaStart, mashaM) {
// //   const vasyaInterval = new Set([...Array(vasyaStart + vasyaV).keys()].slice(vasyaStart - vasyaV, vasyaStart + vasyaV));
// //   const mashaInterval = new Set([...Array(mashaStart + mashaM).keys()].slice(mashaStart - mashaM, mashaStart + mashaM));

// //   const minStart = Math.min(Math.min(...vasyaInterval), Math.min(...mashaInterval));
// //   const maxEnd = Math.max(Math.max(...vasyaInterval), Math.max(...mashaInterval));

// //   let count = maxEnd - minStart;

// //   if (vasyaInterval.has(0) || mashaInterval.has(0)) {
// //     count--;
// //   }

// //   return count;
// // }
// // let result  = countPaintableTrees(arr1[0], arr1[1], arr2[0], arr2[1])

// // console.log('all1-', all1);
// // console.log('all2-', all2);

//   const vasyaInterval = new Set([...Array(arr1[0]+ arr1[1]).keys()].slice(arr1[0] - arr1[1], arr1[0] + arr1[1]));
//   const mashaInterval =  new Set([...Array(arr2[0]+ arr2[1]).keys()].slice(arr2[0] - arr2[1], arr2[0] + arr2[1] + 1));
 
// console.log(vasyaInterval, mashaInterval);

// // if (min1 >= max2 || max1 <= min2 || min2 >= max1 || max2 <= min1) {
// // 	if (all1 - all2 >= 0) {
// // 		console.log(all1 - all2);
// // 		allTree = arr1[1] * 2 + arr2[1] * 2 + 2 - (all1 - all2);
// // 	} else if (all2 - all1 >= 0) {
// // 		allTree = arr1[1] * 2 + arr2[1] * 2 + 2 - (all2 - all1);
// // 	}
// // } else {
// // 	allTree = arr1[1] * 2 + arr2[1] * 2 + 2;
// // }

// // console.log(allTree);



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


