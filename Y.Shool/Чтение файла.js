const fs = require('fs');

// Путь к входному файлу
const inputFilePath = './input.txt';

const outputFilePath = './output.txt';

fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
        return;
    }
    

    const numbers = data.split(' ');
    
    // Извлечение чисел A и B
    const A = parseInt(numbers[0], 10);
    const B = parseInt(numbers[1], 10);
    
    
    const sum = A + B;
    
 
    fs.writeFile(outputFilePath, sum.toString(), err => {
        if (err) {
            console.error( err);
            return;
        }
        console.log( outputFilePath);
    });
});
