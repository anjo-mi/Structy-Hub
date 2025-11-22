const summingSquares = (n, memo = {}) => {
  if (!n) return 0;
  if (n < 0) return Infinity;
  if (n in memo) return memo[n];

  const sqs = [];
  for (let i = 1 ; i * i <= n ; i++)sqs.push(i*i);
  return memo[n] = Math.min(...sqs.map(sq => summingSquares(n-sq,memo) + 1));
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
