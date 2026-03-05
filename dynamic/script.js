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
