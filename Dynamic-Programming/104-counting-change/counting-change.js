const countingChange = (amt, coins, i = 0, memo = {}) => {
  const key = amt + ';' + i;
  if (amt === 0) return 1;
  if (amt  <  0) return 0;
  if (key in memo) return memo[key];
  let result = 0;
  const coin = coins[i];
  for (let q = 0 ; q * coin <= amt ; q++){
    result += countingChange(amt - q*coin, coins, i+1, memo);
  }
  memo[key] = result;
  return memo[key];
};
console.log(countingChange(24, [3, 5, 7]), 5);
console.log(countingChange(13, [2, 6, 12, 10]), 0);
console.log(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]), 1525987916);
/*
add a parameter for the index to keep track of position in coins array
add a parameter for memoizing

}
*/
module.exports = {
  countingChange,
};
