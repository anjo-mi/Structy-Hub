const arrayStepper = (nums,i = 0, memo = {}) => {
  if (i === nums.length - 1) return true;
  if (!nums[i]) return false;
  if (i in memo) return memo[i];

  const steps = [];
  for (let step = 1 ; step <= nums[i] ; step++) steps.push(step);
  
  return memo[i] = steps.some(step => arrayStepper(nums,i+step,memo));
};
console.log(arrayStepper([2, 4, 2, 0, 0, 1]), true);
console.log(arrayStepper([1, 1, 1, 1, 1, 0]), true);
console.log(arrayStepper([4, 1, 2, 1, 1, 1, 0, 4]), false);

module.exports = {
  arrayStepper,
};
