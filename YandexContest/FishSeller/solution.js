//node.js
function maxProfit(N, K, prices) {
    let maxProfit = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < Math.min(N, i + K + 1); j++) {
            const profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    const [N, K] = input.split(' ').map(Number);
    rl.question('', (prices) => {
        const pricesArr = prices.split(' ').map(Number);
        console.log(maxProfit(N, K, pricesArr));
        rl.close();
    });
});

//python

//def max_profit(N, K, prices):
//     max_profit = 0
//     for i in range(N):
//         for j in range(i + 1, min(N, i + K + 1)):
//             profit = prices[j] - prices[i]
//             if profit > max_profit:
//                 max_profit = profit
//     return max_profit
//
// N, K = map(int, input().split())
// prices = list(map(int, input().split()))
// print(max_profit(N, K, prices))

