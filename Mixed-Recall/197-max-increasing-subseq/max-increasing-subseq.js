const maxIncreasingSubseq = (nums, i = 0, prev = -Infinity, memo = {}) => {
  const k = i + ';' + prev;

  if (i >= nums.length) return 0;
  if (k in memo) return memo[k];

  const poss = [];
  const ignoreNum = maxIncreasingSubseq(nums,i+1,prev,memo);
  poss.push(ignoreNum)
  
  const curr = nums[i];
  if (curr > prev){
      poss.push(maxIncreasingSubseq(nums,i+1,curr,memo) + 1);
  }

  return memo[k] = Math.max(...poss);
};

const nums = [4, 18, 20, 10, 12, 15, 19];
console.log(maxIncreasingSubseq(nums), 5);

const numbers = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
console.log(maxIncreasingSubseq(numbers), 1);

/*

*/


module.exports = {
  maxIncreasingSubseq,
};
