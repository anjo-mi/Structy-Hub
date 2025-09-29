const subarraySumCount = (nums, sum, i = 0, j = nums.length,memo={}) => {
  const k = i + ';' + j;
  if (i > j) return null;
  if (k in memo) return memo[k];
  if (nums.slice(i,j).reduce((a,el) => a + el, 0) === sum) memo[k] = 1;
  if (i === j && nums[i] === sum) memo[k] = 1;
  subarraySumCount(nums,sum,i+1,j,memo);
  subarraySumCount(nums,sum,i,j-1,memo);

  return Object.values(memo).reduce((a,el) => a + el, 0);
};
console.log(subarraySumCount([1, 3, 1, 4, 3], 2), 0);
console.log(subarraySumCount([1, 3, 1, 4, -2, 3], 5), 3);
console.log(subarraySumCount([-2, 1, 1, 1, -1, 1, 1, 1, 1], 3), 8);
/*
prolly add : indeces for i = 0 and j = nums.length - 1

??? make a key (i + ';' + j) and if key in memo, return memo[key]???
if (i === j and nums[i] === target) return 1 (1 length array that totals to sum is a pass)
if (i > j) return 0 (fail)
???if (key in memo)???

if (nums.slice(i,j).reduce((a,el) => a + el, 0) === sum) memo[key] = 1 + subarraySumCount(nums,sum,i+1,j-1, ?memo?)

else memo[k] = Math.max(i+1 / j-1)
return memo[k]
p
Number Array (nums)
Number (sum)
add: (Number-(i), Number-(j), Object-(memo))
r
Number (total count of subarrays that total to sum)
e
negatives (should be fine)
0 length array (return 0)
p
*/

module.exports = {
  subarraySumCount,
};
