//this is a siple exampel how we can do sets in js by hands
let setSize = 10;
let mySet = Array.from({length: setSize}, () => []);

function add(x) {
    mySet[x % setSize].push(x);
}

function find(x) {
    for (let now of mySet[x % setSize]) {
        if (now === x) {
            return true;
        }
    }
    return false;
}

function deleteSet(x) {
    let xList = mySet[x % setSize];
    for (let i = 0; i < xList.length; i++) {
        if (xList[i] === x) {
            xList[i] = xList[xList.length - 1];
            xList.pop();
            return;
        }
    }
}