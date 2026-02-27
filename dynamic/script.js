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