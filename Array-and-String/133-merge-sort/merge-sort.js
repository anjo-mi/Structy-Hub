const mergeBack = (front,back) => {
  const merged = [];
  front.reverse();
  back.reverse();
  while (front.length && back.length){
    const f = front[front.length - 1];
    const b = back[back.length - 1];
    merged.push( f < b ? front.pop() : back.pop() )
  }
  if (front.length) merged.push(...front.reverse());
  if (back.length) merged.push(...back.reverse());
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
