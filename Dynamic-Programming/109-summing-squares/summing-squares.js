const summingSquares = (n,d=0, memo ={}) => {
  if (!n) return 0;
  if (n < 0) return Infinity;
  if (n in memo) return memo[n];

  let min = Infinity;
  const sqs = [];
  for (let i = 1 ; i**2 <= n ; i++) sqs.push(i**2);
  const poss = sqs.map(sq => summingSquares(n - sq,d+1,memo) + 1);

  memo[n] = Math.min(...poss);
  return !isFinite(memo[n]) && !d ? -1 : memo[n];
};

/*

*/
console.log(summingSquares(12), 3);
console.log(summingSquares(8), 2);
console.log(summingSquares(31), 4);
console.log(summingSquares(87), 4);

module.exports = {
  summingSquares,
};
