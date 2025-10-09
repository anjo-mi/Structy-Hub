const mergeBack = (front,back) => {
  let i = 0,
      j = 0;
  const merged = [];
  while (i < front.length && j < back.length){
    const next = front[i] <= back[j] ? front[i] : back[j];
    merged.push(next);
    if (next === front[i]) i++;
    else j++;
  }
  if (i < front.length) merged.push(...front.slice(i));
  if (j < back.length ) merged.push(...back.slice(j));
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
