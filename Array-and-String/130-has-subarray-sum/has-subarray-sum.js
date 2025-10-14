const hasSubarraySum = (nums,sum,i=0,j=nums.length,memo={}) => {
  const k = i+';'+j;
  if (k in memo) return;
  if (i > j) return 0;
  if (i === j) return nums[i] === sum ? 1 : 0;

  memo[k] = nums.slice(i,j).reduce((a,el) => a + el,0) === sum ? 1 : 0;

  hasSubarraySum(nums,sum,i+1,j,memo);
  hasSubarraySum(nums,sum,i,j-1,memo);

  return Object.values(memo).reduce((a,el) => a + el,0) > 0;
};


console.log(hasSubarraySum([5], 5), true);
console.log(hasSubarraySum([1, 3, 1, 4, 3], 8), true);
console.log(hasSubarraySum([4, 2, 5, 1, 5, -2, 8], 9), true);
console.log(hasSubarraySum([1, 3, 1, 4, 3], 2), false);
console.log(hasSubarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1], 10), false);
module.exports = {
  hasSubarraySum,
};
