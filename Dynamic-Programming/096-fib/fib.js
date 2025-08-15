const fib = (n, cache = {}) => {
  if (n <= 1) return n;
  if (n in cache) return cache[n]
  cache[n] = fib(n-1,cache) + fib(n-2,cache);
  return cache[n];
}


console.log(fib(0),0)
console.log(fib(46), 1836311903)
console.log(fib(5),5)

module.exports = {
  fib,
};
