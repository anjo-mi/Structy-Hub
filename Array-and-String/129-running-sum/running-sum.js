const runningSum = (nums) => {
  let total = 0;
  return nums.map(el => {
    total += el;
    return total;
  })
};
// make a total of 0 (let)
// map the array,
//   total += element
//   return total
// return mapped array
console.log(runningSum([4, 2, 1, 6, 3, 6]), [ 4, 6, 7, 13, 16, 22 ]);
console.log(runningSum([12, 88, 0, -50, 30, 2]), [ 12, 100, 100, 50, 80, 82 ]);
console.log(runningSum([]), [ ]);
/*
p
Number-Array
r
Number-Array (each element equals element plus total thus far) can prolly reduce to an array
e
empty array (return [])
negatives (should work with addition still)
non number arrays (toss error prolly)
p
*/
module.exports = {
  runningSum,
};
