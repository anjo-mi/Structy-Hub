const maxSubarrayProductSizeK = (nums, k) => {
  let maxProd = nums.slice(0,k).reduce((a,el) => a * el, 1);
  let currProd = maxProd;
  for (let i = 0 ; i < nums.length - k ; i++){
    currProd /= nums[i];
    currProd *= nums[i+k];
    maxProd = Math.max(currProd,maxProd);
  }
  return maxProd;
};

console.log(maxSubarrayProductSizeK([7, 4, -5, -7, 8, -10, -1], 2));


module.exports = {
  maxSubarrayProductSizeK,
};
