const hasSubarraySum = (nums,tar) => {
  const sums = [0];
  let total = 0;
  for (const num of nums) sums.push(total+=num);

  const seen = new Set();
  for (const sum of sums){
    const comp = sum - tar;
    if (seen.has(comp)) return true;
    seen.add(sum);
  }
  return false;
};


console.log(hasSubarraySum([5], 5), true);
console.log(hasSubarraySum([1, 3, 1, 4, 3], 8), true);
console.log(hasSubarraySum([4, 2, 5, 1, 5, -2, 8], 9), true);
console.log(hasSubarraySum([1, 3, 1, 4, 3], 2), false);
console.log(hasSubarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1], 10), false);
module.exports = {
  hasSubarraySum,
};
