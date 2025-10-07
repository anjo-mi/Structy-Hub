const fib = (n, memo ={}) => {
  if (n <= 1) return n;
  if (n in memo) return memo[n];

  return memo[n] = fib(n-1,memo) + fib(n-2,memo);
}


console.log(fib(0),0)
console.log(fib(46), 1836311903)
console.log(fib(5),5)

module.exports = {
  fib,
};
