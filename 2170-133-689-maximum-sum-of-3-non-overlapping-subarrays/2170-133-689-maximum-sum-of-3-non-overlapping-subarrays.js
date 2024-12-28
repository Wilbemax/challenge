var maxSumOfThreeSubarrays = function (nums, k) {
    let length = nums.length - k + 1, m = 3;
    let memo = Array(length).fill(0);
    memo[0] = nums.slice(k).reduce((acc, n) => acc + n);

    for (let i = 1; i < nums.length - k + 1; i++) {
        memo[i] = memo[i - 1] - nums[i - 1] + nums[i + k - 1];
    }
    let sumMemo = Array.from(Array(m + 1), () => [0, []]);
    for (let i = 0; i < nums.length - k * m + 1; i++) {
        for (let j = 1; j <= m; j++) {
            let l = i + (j - 1) * k;
            let windowSum = memo[l];
            let tempSum = windowSum + sumMemo[j - 1][0];
            if (tempSum > sumMemo[j][0]) {
                let indices = [...sumMemo[j - 1][1], l];
                sumMemo[j] = [tempSum, indices];
            }
        }
    }
    return sumMemo[m][1];
};