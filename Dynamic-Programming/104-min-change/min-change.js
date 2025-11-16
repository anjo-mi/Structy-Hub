const minChange = (amt,coins, d=0, memo={}) => {
  if (!amt) return 0;
  if (amt < 0) return Infinity;
  if (amt in memo) return memo[amt];

  const min = Math.min(...coins.map(cn => minChange(amt-cn,coins,1,memo) + 1))
  return memo[amt] = !isFinite(min) && !d ? -1 : min;
};
/*

*/
console.log(minChange(8, [1, 5, 4, 12]), 2);
console.log(minChange(13, [1, 9, 5, 14, 30]), 5);
console.log(minChange(102, [1, 5, 10, 25]) ,6);
console.log(minChange(271, [10, 8, 265, 24]), -1);

module.exports = {
  minChange,
};
