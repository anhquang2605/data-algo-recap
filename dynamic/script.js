//slower verson of fib, exponential time complexity
const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
//faster version of fib, linear time complexity
const fib2 = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
    return memo[n];
}
//using bottom up approach, linear time complexity
const fib3 = (n) => {
    if (n === 0) return 0;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

const addUntil100 = (arr) => {
    if (arr.length === 0) return 0;
    const firstNum = arr[0];
    const remainingArr = arr.slice(1);
    const remaingSum = addUntil100(remainingArr);
    if (firstNum + remaingSum > 100) {
        return remaingSum;
    } else {
        return firstNum + remaingSum;
    }
}
//the Og golomb sequence, exponential time complexity, need to memorize to get linear time complexity
const golomb = (n) => {
    if (n === 1) return 1;
    return 1 + golomb(n - golomb(golomb(n - 1)));
}
const golomb2 = (n, memo = {}) => {
    if (n === 1) return 1;
    if (!(n in memo)) {
        memo[n] = golomb2(n - golomb2(golomb2(n - 1, memo), memo), memo) + 1;
    }
    return memo[n];
}
//unique paths without memoization, exponential time complexity
const uniquePaths = (m, n) => {
    if (m === 1 || n === 1) return 1;
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
}
//unique paths with memoization, linear time complexity
const uniquePaths2 = (m, n, memo = {}) => {
    if (m === 1 || n === 1) return 1;
    const key = `${m},${n}`;
    if (!(key in memo)) {
        memo[key] = uniquePaths2(m - 1, n, memo) + uniquePaths2(m, n - 1, memo);
    } 
    return memo[key];
}