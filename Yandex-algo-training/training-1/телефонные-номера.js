const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf8');

const lines = fileContent
    .toString()
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '');

function cleanNumber(number) {
    return number.replace(/[^0-9]/g, '');
}


const cleaned = lines.map(cleanNumber);
const s = cleaned[0];
const result = [];
for (let i = 1; i < cleaned.length; i++) {
    const current = cleaned[i];
    let match = false;
    if (current === s) {
        match = true;
    }
    else if (current.length === 11 && current.slice(1) === s.slice(1)) {
        match = true;
    }
    else if (`495${current}` === s.slice(1)) {
        match = true;
    }
    else if (`495${s}` === current.slice(1)) {
        match = true;
    }

    result.push(match ? 'YES' : 'NO');
}

fs.writeFileSync('output.txt', result.join('\n'));