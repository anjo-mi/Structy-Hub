const findSubarraySum = (nums, target) => {
  let front = 0;
  let curr = nums[front];
  if (curr === target) return [0];
  for (let i = 1 ; i < nums.length ; i++){
    // console.log({curr,front,i})
    // if (curr === target) return [front,i-1];
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
console.log(findSubarraySum([3, 1, 4, 9, 2, 1, 7], 10))
module.exports = {
  findSubarraySum,
};
