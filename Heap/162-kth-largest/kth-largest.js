const kthLargest = (numbers, k) => {
  if (k >= numbers.length) return null;
  numbers.sort((a,b) => b-a);
  return numbers[k-1];
};
/*
sort array big to small
pick k - 1 index ?
O(nlogn?)
*/
console.log(kthLargest([9,2,6,6,1,5,8,7], 3), 7);
console.log(kthLargest([9,2,6,6,1,5,8,7], 4), 6);

numbers = [
  4,5,85,77,47,80,37,42,3,6,62,33,69,68,16,20,83,39,14,58,75,35,72,36,19,18,66,61,41,79,28,43,7,24,40,53,32,12
]
console.log(kthLargest(numbers, 5), 77);

module.exports = {
  kthLargest,
};
