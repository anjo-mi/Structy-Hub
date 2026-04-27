const longestSubarraySum = (nums, target) => {
  let longest = -1,
      front = 0,
      curr = nums[front];
  if (curr === target) longest = 1;
  for (let i = 1 ; i < nums.length ; i++){
    curr += nums[i];
    while (curr > target){
      curr -= nums[front];
      front++;
    }
    if (curr === target) longest = Math.max(longest, (i-front) + 1);
  }
  return longest;
};
console.log(longestSubarraySum([4, 2, 2, 2, 1, 1], 6));

module.exports = {
  longestSubarraySum,
};
