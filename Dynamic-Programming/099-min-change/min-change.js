const minChange = (amt, coins,memo={},depth = 0) => {
  if (amt === 0) memo[amt] = 0;
  if (amt < 0) memo[amt] = Infinity;
  if (amt in memo) return memo[amt];
  memo[amt] = Math.min(...coins.map(coin => minChange(amt-coin, coins, memo, depth + 1))) + 1;

  return !isFinite(memo[amt]) && !depth ? -1 : memo[amt];
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
