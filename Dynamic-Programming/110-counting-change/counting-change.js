const countingChange = (amt, coins, i = 0, memo ={}) => {
  if (!amt) return 1;
  if (amt < 0) return 0;
  const k = i + ';' + amt;
  if (k in memo) return memo[k];

  const coin = coins[i];
  let result = 0;
  for (let q = 0 ; q * coin <= amt ; q++){
    result += countingChange(amt-(q*coin), coins,i+1,memo)
  }
  return memo[k] = result;
};
console.log(countingChange(24, [3, 5, 7]), 5);
console.log(countingChange(13, [2, 6, 12, 10]), 0);
console.log(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]), 1525987916);
/*

*/
module.exports = {
  countingChange,
};
