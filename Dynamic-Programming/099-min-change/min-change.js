const minChange = (amt, coins,memo={},depth = 0) => {
  if (amt <   0) memo[amt] = Infinity;
  if (amt === 0) memo[amt] = 0;
  if (amt in memo) return memo[amt];
  let min = Infinity;
  for (const coin of coins){
    const change = minChange(amt-coin, coins, memo, depth + 1);
    if (change + 1 < min) min = change + 1;
  }
  memo[amt] = min;
  return memo[amt] === Infinity && depth === 0 ? -1 : memo[amt];
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
