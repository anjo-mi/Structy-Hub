const countingChange = (amt, coins, i = 0, memo = {}) => {
  const k = amt + ';' + i;
  if (k in memo) return memo[k];
  if (!amt) return 1;
  if (amt < 0) return 0;

  let res = 0;
  const cn = coins[i];
  for (let q = 0 ; q * cn <= amt ; q++){
    res += countingChange(amt-(cn * q),coins,i+1,memo);
  }
  return memo[k] = res;
};
console.log(countingChange(24, [3, 5, 7]), 5);
console.log(countingChange(13, [2, 6, 12, 10]), 0);
console.log(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]), 1525987916);
/*

*/
module.exports = {
  countingChange,
};
