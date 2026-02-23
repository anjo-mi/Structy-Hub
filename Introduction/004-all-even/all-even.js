const allEven = (nums) => nums.every(num => !(num % 2))
console.log(allEven([4, 90, 68, 6, -2]), true)

module.exports = {
  allEven,
};
