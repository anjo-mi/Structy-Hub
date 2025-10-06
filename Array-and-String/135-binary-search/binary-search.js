const binarySearch = (nums, targ) => {
  if (!nums.length) return -1;
  let start = 0;
  let end = nums.length;
  while (start < end){
    const mid = Math.floor((start+end) / 2);
    if (targ < nums[mid]) end = mid;
    if (targ > nums[mid]) start = mid+1;
    if (targ === nums[mid]) return mid;
  }
  return -1;
};

console.log(binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 28), 8);
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6), 6);
console.log(binarySearch([7], 7), 0);
console.log(binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 27), -1);
console.log(binarySearch([], 7), -1);
/*
**********NEED TO IMPLEMENT BINARY SEARCH*********

find the middle of the array

BASE CASE: !nums.length -> return -1;
const mid = Math.floor(nums.length / 2);
if (targ < nums[mid]) call function on nums.slice(0,mid);
if (targ > nums[mid]) call function on nums.slice(mid);
if (targ === nums[mid]) return mid
p
Number-Array (nums),
Number (targ)
r
Number - index of target in array, -1 if not present
e
empty array? (-1)
p

*/



module.exports = {
  binarySearch,
};
