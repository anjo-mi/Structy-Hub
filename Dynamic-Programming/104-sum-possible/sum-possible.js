const sumPossible = (amt, nums, memo = {}) => {
  
};
/*

*/
console.log(sumPossible(8, [5, 12, 4]), true);
console.log(sumPossible(15, [6, 2, 10, 19]), false);
console.log(sumPossible(12, []), false);
console.log(sumPossible(0, []), true);
console.log(sumPossible(13, [3, 5]), true);

module.exports = {
  sumPossible,
};
