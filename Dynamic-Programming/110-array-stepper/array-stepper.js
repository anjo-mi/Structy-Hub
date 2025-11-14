const arrayStepper = (nums, i = 0, memo = {}) => {
  if (i >= nums.length - 1) return true;
  if (!nums[i]) return false;
  if (i in memo) return memo[i];

  const steps = [];
  for (let s = 1 ; s <= nums[i] ; s++) steps.push(s)

  return memo[i] = steps.some(st => arrayStepper(nums,i+st,memo));
};
console.log(arrayStepper([2, 4, 2, 0, 0, 1]), true);
console.log(arrayStepper([1, 1, 1, 1, 1, 0]), true);
console.log(arrayStepper([4, 1, 2, 1, 1, 1, 0, 4]), false);

module.exports = {
  arrayStepper,
};
