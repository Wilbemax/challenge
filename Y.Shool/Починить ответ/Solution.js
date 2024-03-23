
async function fetchString() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data;
}

async function solution() {
    let result = '';
    let validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function isValid(str) {
        return str.split('').every(char => validChars.includes(char));
    }

    
    let fetchedString = await fetchString();
    while (!isValid(fetchedString)) {
        
        fetchedString = await fetchString();
    }


    result += fetchedString;

    return result;
}

module.exports = solution;
