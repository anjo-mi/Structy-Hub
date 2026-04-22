const subarrayTargetSumSizeK = (nums, target, k) => {
  const res = [];
  let currSum = nums.slice(0,k).reduce((a,el) => a + el,0);
  for (let i = 0 ; i <= nums.length - k ; i++){
    // console.log({i,k,currSum})
    if (currSum === target) res.push(nums.slice(i,i+k));
    if (i + k === nums.length) break;
    currSum -= nums[i];
    currSum += nums[i+k];
  }
  return res.length;
};

console.log(subarrayTargetSumSizeK([2, 3, 2], 7, 3))

module.exports = {
  subarrayTargetSumSizeK,
};
