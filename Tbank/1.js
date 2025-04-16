// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//
// });
//
// function isPalindrome(s) {
//     return s === s.split('').reverse().join('');
// }
//
// function isAlmostPalindrome(s) {
//     for (let i = 0; i < s.length; i++) {
//         const modifiedStr = s.slice(0, i) + s.slice(i + 1);
//         if (isPalindrome(modifiedStr)) {
//             return "YES";
//         }
//     }
//     return "NO";
// }
//
// rl.question('', (input) => {
//     const s = input.trim();
//
//
//         console.log(isAlmostPalindrome(s));
//
//
//     rl.close();
// });


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

const inputs = [];

rl.on('line', (line) => {
    // Дополнительно можно остановиться на пустой строке:
    if (line.trim() === '') {
        rl.close();
    } else {
        inputs.push(line.trim());
    }
});

rl.on('close', () => {
    // Обрабатываем все введённые строки
    for (const s of inputs) {
        if (s.length !== 4) {
            console.log(`Ошибка: "${s}" — должна быть строка из 4 символов.`);
            continue;
        }

        let isAlmostPal = false;
        for (let i = 0; i < s.length; i++) {
            const modified = s.slice(0, i) + s.slice(i + 1);
            if (modified === modified.split('').reverse().join('')) {
                isAlmostPal = true;
                break;
            }
        }

        console.log(`${s} → ${isAlmostPal ? 'YES' : 'NO'}`);
    }
});