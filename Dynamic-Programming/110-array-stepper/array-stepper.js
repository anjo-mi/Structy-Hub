const arrayStepper = (nums, i = 0 , memo = {}) => {
  if (i >= nums.length - 1) return true;
  if (nums[i] === 0) return false;
  if (i in memo) return memo[i];
  
  const num = nums[i];
  const steps = [];
  
  for (let i = 1 ; i <= num ; i++) steps.push(i);

  memo[i] = steps.some(step => arrayStepper(nums, i + step, memo));

  return memo[i];
};
console.log(arrayStepper([2, 4, 2, 0, 0, 1]), true);
console.log(arrayStepper([4, 1, 2, 1, 1, 1, 0, 4]), false);
console.log(arrayStepper([1, 1, 1, 1, 1, 0]), true);

module.exports = {
  arrayStepper,
};
