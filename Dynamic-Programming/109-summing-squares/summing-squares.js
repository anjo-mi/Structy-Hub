const summingSquares = (n,d=0,memo={}) => {
  if (!n) return 0;
  if (n in memo) return memo[n];

  const sqs = [];
  for (let i = 1 ; i * i <= n ; i++) sqs.push(i*i);

  const poss = sqs.map(sq => summingSquares(n-sq,d+1,memo) + 1);
  const min = Math.min(...poss);
  memo[n] = min;
  return !isFinite(min) && !depth ? -1 : min;
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
