const arrayStepper = (nums, i = 0, memo = {}) => {
  if (i >= nums.length - 1) return true;
  if (nums[i] === 0) return false;
  if (i in memo) return memo[i];

  const steps = [];
  const num = nums[i];
  for (let i = 1 ; i <= num ; i++){
    steps.push(i);
  }
  memo[i] = steps.some(step => arrayStepper(nums, i + step, memo));
  console.log({memo,i,steps})
  return memo[i];
};
console.log(arrayStepper([2, 4, 2, 0, 0, 1]), true);
// add an index parameter starting at 0
// add a memo parameter to store results of later elements

// if (i >= nums.length - 1) return true;
// if (nums[i] === 0) return false;
// if (i in memo) return memo[i];

// currNum = nums[i];
// make an array of numbers up to current num

// (maybe just make memo[i] = array.some(*below*))
// map that array to have each value added to the index
//   call arrayStepper on nums, i + value, memo
//   if any of those are true
//     memo[i] = true
//     return it
// console.log(arrayStepper([4, 1, 2, 1, 1, 1, 0, 4]), false);
// console.log(arrayStepper([1, 1, 1, 1, 1, 0]), true);

/*
p
Number Array,
(prolly add index and memo params)
r
Boolean
can you reach the last element in the array,
stepping any amount of steps up to the element's value
  at each step
e
array that is length of 1 or 0? (true, true)
p
add an index parameter starting at 0
add a memo parameter to store results of later elements

if (i >= nums.length - 1) return true;
if (nums[i] === 0) return false;
if (i in memo) return memo[i];

currNum = nums[i];
make an array of numbers up to current num

(maybe just make memo[i] = array.some(*below*))
map that array to have each value added to the index
  call arrayStepper on nums, i + value, memo
  if any of those are true
    memo[i] = true
    return it

*/
module.exports = {
  arrayStepper,
};
