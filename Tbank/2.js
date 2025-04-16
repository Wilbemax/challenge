const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

const inputs = [];

rl.on('line', (line) => {
    if (line.trim() === '') {
        rl.close();
    } else {
        inputs.push(line.trim());
    }
});

rl.on('close', () => {
    const n = inputs[0].trim().split(' ').map(Number)[0];
    const stations = []
    let i = 1;
    for (i; i <= n; i++) {
        const [x, y] = inputs[i].trim().split(' ').map(Number)
        stations.push([x, y])
    }
    const q = inputs[i].trim().split(' ').map(Number)[0];
    const requests = inputs.slice(i + 1).map((line) => {
        return line.trim().split(' ').map(Number)
    })
    console.log(
        {
            stations,
            q,
            requests
        }
    )
    const responses = requests.map(([x, y]) => {
        const station = stations[x - 1]
        if (station) {
            const [start, step] = station

            if (y >= start) {
                let time = start
                while (y > time) {
                    time += step
                }
                return time
            } else {
                return start
            }
        }

    })

    responses.forEach((response) => {
        console.log(response.toString())
    })


});