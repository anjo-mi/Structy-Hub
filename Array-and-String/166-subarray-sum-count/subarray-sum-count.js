const subarraySumCount = (nums,targ) => {
  const sums = [0];
  let total = 0;
  for (const num of nums) sums.push(total += num);

  let count = 0;
  const seen = {};
  for (const sum of sums){
    const comp = sum - targ;
    if (comp in seen) count += seen[comp];
    seen[sum] = (seen[sum] || 0) + 1;
  }
  return count;
};


module.exports = {
  subarraySumCount,
};
