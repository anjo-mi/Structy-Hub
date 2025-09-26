const hasSubarraySum = (nums, sum, i = 0, j = nums.length, memo = {}) => {
  const k = i + ';' + j;
  if (i === j) return nums[i] === sum;
  if (i  >  j) return false;
  if (k in memo) return memo[k];
  if (nums.slice(i,j).reduce((a,el) => a + el, 0) === sum) memo[k] = true;
  else memo[k] = hasSubarraySum(nums,sum,i+1,j) || hasSubarraySum(nums,sum,i,j-1);
  return memo[k];
};
/*
count from each side
  if a reduction adds to the total, return true
  if it never does, return false
2 exit conditions:
  i > j, return false
  i === j === sum, return true
p
Number Array + Number
r
Boolean (does any SEQUENTIAL sequence of numbers add to sum)
e
empty array and 0 (return true?)
negatives (should work with addition still)
p
*/

console.log(hasSubarraySum([5], 5), true);
console.log(hasSubarraySum([1, 3, 1, 4, 3], 8), true);
console.log(hasSubarraySum([4, 2, 5, 1, 5, -2, 8], 9), true);
console.log(hasSubarraySum([1, 3, 1, 4, 3], 2), false);
console.log(hasSubarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1], 10), false);
module.exports = {
  hasSubarraySum,
};
