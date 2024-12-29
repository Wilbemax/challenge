/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
    const MOD = 1e9 + 7;
    const m = target.length;
    const n = words[0].length;

    const dp = new Array(m + 1).fill(0);
    dp[0] = 1;

    const count = Array.from({ length: n }, () => Array(26).fill(0));
    
    for (const word of words) {
        for (let i = 0; i < n; i++) {
            count[i][word.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = m - 1; j >= 0; j--) {
            dp[j + 1] = (dp[j + 1] + dp[j] * count[i][target.charCodeAt(j) - 'a'.charCodeAt(0)]) % MOD;
        }
    }
    
    return dp[m];
};