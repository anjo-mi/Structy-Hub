const binarySearch = (nums, targ) => {
  let i = 0,
      j = nums.length - 1;
  while (i <= j){
    const mid = Math.floor((i+j)/2);
    if (nums[mid] === targ) return mid;
    if (nums[mid] > targ) j = mid - 1;
    else i = mid + 1;
  }
  return -1;
};

console.log(binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 28), 8);
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6), 6);
console.log(binarySearch([7], 7), 0);
console.log(binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 27), -1);
console.log(binarySearch([], 7), -1);


module.exports = {
  binarySearch,
};
