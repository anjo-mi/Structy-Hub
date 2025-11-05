const mergeBack = (a1,a2) => {
  let i = 0,
      j = 0;
  const merged = [];
  while (i < a1.length && j < a2.length){
    const next = a1[i] < a2[j] ? a1[i] : a2[j];
    merged.push(next);
    if (next === a1[i]) i++;
    else j++;
  }
  if (i < a1.length) merged.push(...a1.slice(i));
  if (j < a2.length) merged.push(...a2.slice(j));
  return merged;
}

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0,mid));
  const right = mergeSort(nums.slice(mid));
  return mergeBack(left,right);
};

const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
console.log(mergeSort(numbers),  [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]);
const nums = [7, -30, -4, -1, 12, 0, 20];
console.log(mergeSort(nums), [ -30, -4, -1, 0, 7, 12, 20 ]);



module.exports = {
  mergeSort,
};
