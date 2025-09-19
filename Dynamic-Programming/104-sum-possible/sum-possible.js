const sumPossible = (amt, nums, memo = {}) => {
  if (!amt) return true;
  if (amt < 0) return false;
  if (amt in memo) return memo[amt];

  memo[amt] = nums.some(n => sumPossible(amt-n,nums,memo));
  return memo[amt];
};
/*

*/
console.log(sumPossible(8, [5, 12, 4]), true);
console.log(sumPossible(15, [6, 2, 10, 19]), false);
console.log(sumPossible(12, []), false);
console.log(sumPossible(0, []), true);
console.log(sumPossible(13, [3, 5]), true);

module.exports = {
  sumPossible,
};
