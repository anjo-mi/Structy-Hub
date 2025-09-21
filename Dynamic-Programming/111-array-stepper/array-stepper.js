const arrayStepper = (nums) => {
  let goal = nums.length - 1;
  for (let i = nums.length - 2 ; i >= 0 ; i--){
    if (nums[i] + i >= goal) goal = i;
  }
  return !goal;
};
console.log(arrayStepper([2, 4, 2, 0, 0, 1]), true);
console.log(arrayStepper([4, 1, 2, 1, 1, 1, 0, 4]), false);
console.log(arrayStepper([1, 1, 1, 1, 1, 0]), true);

module.exports = {
  arrayStepper,
};
