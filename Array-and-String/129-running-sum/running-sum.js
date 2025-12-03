const runningSum = (nums) => {
  let t = 0;
  return nums.map(n => t += n);
};

console.log(runningSum([4, 2, 1, 6, 3, 6]), [ 4, 6, 7, 13, 16, 22 ]);
console.log(runningSum([12, 88, 0, -50, 30, 2]), [ 12, 100, 100, 50, 80, 82 ]);
console.log(runningSum([]), [ ]);

module.exports = {
  runningSum,
};
