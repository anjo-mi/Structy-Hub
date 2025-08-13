const fib = (n, vals = {}) => {
  if (n in vals) return vals[n];
  if (n < 2) vals[n] = n;
  else {vals[n] = fib(n-1,vals) + fib(n-2,vals);}
  return vals[n];
}


console.log(fib(0),0)
console.log(fib(46), 1836311903)
console.log(fib(5),5)

module.exports = {
  fib,
};
