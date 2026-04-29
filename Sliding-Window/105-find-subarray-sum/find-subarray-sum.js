const findSubarraySum = (nums, target) => {
  let front = 0;
  let curr = nums[front];
  if (curr === target) return [0];
  for (let i = 1 ; i < nums.length ; i++){
    while(curr > target){
      curr -= nums[front];
      front++;
      if (curr === target) return [front,i-1];
    }
    curr += nums[i];
    if (curr === target) return [front,i];
  }
  return [-1,-1];
};

module.exports = {
  findSubarraySum,
};
