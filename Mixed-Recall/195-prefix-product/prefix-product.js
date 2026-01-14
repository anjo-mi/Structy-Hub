const prefixProduct = (nums) => {
  let start = 1;
  return nums.map(el => start *= el);
};

/*
start with one, push that *= el to new array
*/

console.log(prefixProduct([4, 2, 1, 6, 3, 6]), [ 4, 8, 8, 48, 144, 864 ] );
console.log(prefixProduct([12, 88, 0, -50, 30, 2]), [ 12, 1056, 0, 0, 0, 0 ] );

module.exports = {
  prefixProduct,
};
