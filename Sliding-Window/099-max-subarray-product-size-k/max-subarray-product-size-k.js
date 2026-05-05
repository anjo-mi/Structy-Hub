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


module.exports = {
  maxSubarrayProductSizeK,
};
