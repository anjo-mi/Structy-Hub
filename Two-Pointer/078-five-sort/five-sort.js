function fiveSort(nums){
  let i = 0,
      j = nums.length - 1;
  while (i < j){
    while (nums[j] === 5) j--;
    while (nums[i] !== 5 && i < j){
      i++;
    }
    [ nums[i] , nums[j] ] = [ nums[j] , nums[i] ];
    i++
    j--;
  }
  return nums;
}

console.log(fiveSort([5, 5, 6, 5, 5, 5, 5]),[6, 5, 5, 5, 5, 5, 5]);
console.log(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]),[4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]);
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]),[2, 2, 10, 6, 1, 5, 5, 5, 5, 5]);

/*

*/
module.exports = {
  fiveSort,
};
