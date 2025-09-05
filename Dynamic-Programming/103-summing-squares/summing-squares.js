const summingSquares = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  const sqs = [];
  for (let i = 1 ; i * i <= n ; i++) sqs.push(i*i);
  const counts = sqs.map(sq => summingSquares(n-sq,memo) + 1);
  memo[n] = Math.min(...counts);
  return memo[n];
};

/*

*/

console.log(summingSquares(8), 2);
console.log(summingSquares(31), 4);
console.log(summingSquares(87), 4);

module.exports = {
  summingSquares,
};
