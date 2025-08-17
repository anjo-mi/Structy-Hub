const fib = (n, memo ={}) => {
  if (n in memo) return memo[n];
  if (n <= 1) memo[n] = n;
  else{
    memo[n] = fib(n-1, memo) + fib(n-2,memo);
  }
  return memo[n];
}


console.log(fib(0),0)
console.log(fib(46), 1836311903)
console.log(fib(5),5)

module.exports = {
  fib,
};
