const sumPossible = (amt, nums, memo = {}) => {
  if (!amt) memo[amt] = true;
  if (amt < 0) memo[amt] = false;
  if (amt in memo) return memo[amt];
  if (nums.some(num => sumPossible(amt - num, nums, memo))){
    memo[amt] = true;
    return memo[amt];
  }
  memo[amt] = false;
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
