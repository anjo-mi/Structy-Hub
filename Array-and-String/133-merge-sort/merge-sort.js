const mergeBack = (arr1,arr2) => {
  let i = 0,
      j = 0;
  const arr3 = [];
  while (i < arr1.length && j < arr2.length){
    const next = Math.min(arr1[i],arr2[j]);
    arr3.push(next);
    if (arr1[i] === next) {
      i++;
      continue;
    }if (arr2[j] === next){
      j++;
      continue; //might not need
    }
  }
  if (i < arr1.length) arr3.push(...arr1.slice(i));
  if (j < arr2.length) arr3.push(...arr2.slice(j));
  return arr3;
};

const mergeSort = (nums) => {
  if (nums.length <=1) return nums;
  const middle = Math.floor(nums.length / 2);
  const front = nums.slice(0,middle);
  const back  = nums.slice(middle);
  const arr1 = mergeSort(front);
  const arr2 = mergeSort(back );
  return mergeBack(arr1,arr2);
};

const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
console.log(mergeSort(numbers),  [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]);
const nums = [7, -30, -4, -1, 12, 0, 20];
console.log(mergeSort(nums), [ -30, -4, -1, 0, 7, 12, 20 ]);
const ns = new Array(120000).fill(7);
console.log(mergeSort(ns), [7, 7, 7, 7, 7,],'...');



/*
*?if i must use a specific algorithm, wouldnt i just look it up?*
| .sort((a,b) => b - a) |
// handle edge case:
if (nums.length <= 1) return nums;

split the array in 2
  const middle = nums.length / 2 ||||||| Math.floor()
  front = slice(0,middle)
  back = slice(middle)
call this function on the two halves (recursively until its returning the array of 1)
mergeSort(left) + right
make a merge function that puts them back together
p
Number-Array
r
Number-Array (sorted using merge-sort algo)
e
empty array or array of 1 -> return array?
p

*/


module.exports = {
  mergeSort,
};
