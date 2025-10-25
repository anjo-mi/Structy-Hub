const subarraySumCount = (nums,sum,i=0,j=nums.length,memo={}) => {
  const k = i+';'+j;
  if (i > j) return 0;
  if (i === j) return memo[k] === sum ? 1 : 0;
  if (k in memo) return;
  memo[k] = nums.slice(i,j).reduce((a,el) => a + el,0) === sum ? 1:0;

  subarraySumCount(nums,sum,i+1,j,memo);
  subarraySumCount(nums,sum,i,j-1,memo);

  return Object.values(memo).reduce((a,el) => a + el,0);
};
console.log(subarraySumCount([1, 3, 1, 4, 3], 2), 0);
console.log(subarraySumCount([1, 3, 1, 4, -2, 3], 5), 3);
console.log(subarraySumCount([-2, 1, 1, 1, -1, 1, 1, 1, 1], 3), 8);


module.exports = {
  subarraySumCount,
};
