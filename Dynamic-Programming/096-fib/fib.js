// const fb = (n) => {
//   const vals = {};
//   const f = (n) => {
//     if (n in vals) return vals[n];
//     if (n <= 1) return n;
//     vals[n] = f(n-1) + f(n-2);
//     return vals[n];
//   }
//   return f;
// }

const fib = (n) => {
  const vals = {};
  const f = (n) => {
    if (n in vals) return vals[n];
    if (n <= 1) return n;
    vals[n] = f(n-1) + f(n-2);
    return vals[n];
  }
  return f(n);
}


console.log(fib(0),0)
console.log(fib(46), 1836311903)
console.log(fib(5),5)

module.exports = {
  fib,
};
