const maxSubarraySumSizeK = (nums, k) => {
  let currSum = nums.slice(0,k).reduce((a,el) => a + el, 0);
  let maxSum = currSum;
  for (let i = 0 ; i < nums.length - k ; i++){
    currSum -= nums[i];
    currSum += nums[i + k];
    maxSum = Math.max(currSum,maxSum);
  }
  return maxSum;
};

console.log(maxSubarraySumSizeK([4, 2, 1, -9, 8, 4, 3], 3), 15);
console.log(maxSubarraySumSizeK([1, 4, 1, 10, 25, 3, 1, 0, 20], 4), 40);
const nums = [];
for (let i = 0; i < 120000; i += 1) {
  nums.push(1);
}
// console.log(maxSubarraySumSizeK(nums, 10000), 10000);


module.exports = {
  maxSubarraySumSizeK,
};
