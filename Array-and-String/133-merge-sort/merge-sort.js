const mergeBack = (a1,a2) => {
  a1.reverse();
  a2.reverse();
  const merged = [];
  while (a1.length && a2.length){
    merged.push(a1[a1.length-1] < a2[a2.length-1] ? a1.pop() : a2.pop());
  }
  while (a1.length) merged.push(a1.pop())
  while (a2.length) merged.push(a2.pop())
  return merged;
}

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const front = mergeSort(nums.slice(0,mid));
  const back  = mergeSort(nums.slice(mid));
  return mergeBack(front,back);
};

const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
console.log(mergeSort(numbers),  [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]);
const nums = [7, -30, -4, -1, 12, 0, 20];
console.log(mergeSort(nums), [ -30, -4, -1, 0, 7, 12, 20 ]);



module.exports = {
  mergeSort,
};
