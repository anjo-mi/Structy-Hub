const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i >= nums.length) return 0;

  const w = nums[i] + nonAdjacentSum(nums,i+2,memo);
  const wo = nonAdjacentSum(nums,i+1,memo);

  memo[i] = Math.max(w,wo);

  return memo[i];
};

/*
p

r

e

p

*/

const nums = [2, 4, 5, 12, 6];
console.log(nonAdjacentSum(nums), 16);
const num = [
  72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
  30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
  83, 80, 56, 68,  6, 22, 56, 96, 77, 98,
  61, 20,  0, 76, 53, 74,  8, 22, 92, 37,
  30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
  72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
  42
];
console.log(nonAdjacentSum(num), 1465);
module.exports = {
  nonAdjacentSum,
};
