const summingSquares = (n,depth=0,memo={}) => {
  if (!n) return 0;
  if (n < 0) return Infinity;
  if (n in memo) return memo[n];

  const sqs = [];
  for (let i = 1 ; i * i <= n ; i++) sqs.push(i*i);

  let poss = sqs.map(sq => summingSquares(n-sq,depth+1,memo) + 1 );
  memo[n] = Math.min(...poss);

  return !isFinite && !depth ? -1 : memo[n];
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
