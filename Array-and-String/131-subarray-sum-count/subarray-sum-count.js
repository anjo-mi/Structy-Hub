const subarraySumCount = (nums,targ) => {
  const sums = [0];
  let total = 0;
  for (const num of nums) sums.push((total += num));

  const seen = {};
  let count = 0;
  for (const curr of sums){
    const comp = curr - targ;
    if (comp in seen) count += seen[comp];
    seen[curr] = (seen[curr] || 0) + 1;
  }
  return count;
};
console.log(subarraySumCount([1, 3, 1, 4, 3], 2), 0);
console.log(subarraySumCount([1, 3, 1, 4, -2, 3], 5), 3);
console.log(subarraySumCount([-2, 1, 1, 1, -1, 1, 1, 1, 1], 3), 8);


module.exports = {
  subarraySumCount,
};
