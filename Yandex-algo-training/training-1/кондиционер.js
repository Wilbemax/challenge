const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.toString().split('\n').map(line => line.trim()).filter(line => line !== '');


const [troom, tcond] = lines[0].split(' ').map(Number);
const mode = lines[1];
let result;
switch (mode) {
    case "freeze":
        result = Math.min(troom, tcond);
        break;
    case "heat":
        result = Math.max(troom, tcond);
        break;
    case "auto":
        result = tcond;
        break;
    case "fan":
        result = troom;
        break;
    default:
        console.error("Ошибка: Недопустимый режим работы.");
        process.exit(1);
}

fs.writeFileSync("output.txt", result.toString());