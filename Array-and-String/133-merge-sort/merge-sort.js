const buildBack = (a1,a2) => {
  let i = 0,
      j = 0;
  const a3 = [];
  while (i < a1.length && j < a2.length){
    const next = Math.min(a1[i] , a2[j]);
    a3.push(next);
    if (next === a1[i]) i++;
    else if (next === a2[j]) j++;
  }
  if (i < a1.length) a3.push(...a1.slice(i));
  if (j < a2.length) a3.push(...a2.slice(j));
  return a3;
}

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const front = nums.slice(0,mid);
  const end = nums.slice(mid);
  const a1 = mergeSort(front);
  const a2 = mergeSort(end);
  return buildBack(a1,a2);
};

const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
console.log(mergeSort(numbers),  [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]);
const nums = [7, -30, -4, -1, 12, 0, 20];
console.log(mergeSort(nums), [ -30, -4, -1, 0, 7, 12, 20 ]);



module.exports = {
  mergeSort,
};
