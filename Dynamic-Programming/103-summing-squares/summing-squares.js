const summingSquares = (n, memo={}) => {
  if (n === 0) memo[n] = 0;
  if (n <   0) memo[n] = Infinity;
  if (n in memo) return memo[n];
  const squares = [];
  for (let i = 1 ; i * i <= n ; i++){
    squares.push(i*i);
  }
  // let min = Infinity;
  const results = squares.map(sq => summingSquares(n - sq, memo) + 1);
  memo[n] = Math.min(...results);
  return memo[n];
};
/*
n = 0 memo[n] = 0
if n in memo return memo[n]
let min = Infinity
loop thru array of squares up to n
subtract each element from n and run summingSquares on it
the minimum value of that (if existent) = min
memo[n] = min
return memo[n]
p
Number, (add memo obj)
r
Number minimum times any perfect square can add to total up to number (1, 4, 9, 16,...)
e
negative numbers (return Infinity?)
p
n = 0 memo[n] = 0
if n in memo return memo[n]
let min = Infinity
loop thru array of squares up to n
subtract each element from n and run summingSquares on it
the minimum value of that (if existent) = min
memo[n] = min
return memo[n]

*/

console.log(summingSquares(8), 2);
console.log(summingSquares(31), 4);
console.log(summingSquares(87), 4);

module.exports = {
  summingSquares,
};
