const tribonacci = (n,memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) {
    memo[n] = 0;
    return memo[n];
  }
  if (n === 2) {
    memo[n] = 1;
    return memo[n];
  }
  memo[n] = tribonacci(n-1,memo) + tribonacci(n-2,memo) + tribonacci(n-3,memo);
  return memo[n];
}

/*

*/

console.log(tribonacci(37), 1132436852);
console.log(tribonacci(7), 13);
console.log(tribonacci(1), 0);
module.exports = {
  tribonacci,
};
