const countingChange = (amt, coins, i = 0, memo = {}) => {
  let k = amt + ',' + i;
  if (k in memo) return memo[k];
  if (amt < 0) return 0;
  if (amt === 0) return 1;
  if (i >= coins.length) return 0;
  const coin = coins[i];
  let result = 0;
  for (let numOfCoins = 0 ; numOfCoins * coin <= amt ; numOfCoins++){
    const total = numOfCoins * coin;
    result += countingChange(amt - total, coins, i + 1, memo);
  }
  memo[k] = result;
  return memo[k];
};
console.log(countingChange(24, [3, 5, 7]), 5);
// console.log(countingChange(13, [2, 6, 12, 10]), 0);
// console.log(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]), 1525987916);
/*
set up the parameters to:
  track the position of coins that were on
  make a key pertaining to the amount and the position of coin we're at

if (amount < 0) return 0
if (amount === 0) return 1
if (key in memo) return memo[key]
let result = 0;
for each denomination of the coin up until it is greater than the amount
  call the function
  if the function eventually equates to 0
    add none to result
  if the function eventually equates to 1
    add one to the result
memo[key] = result
return it
p
Number, array of Numbers, (added memo object)
r
Number total different ways to add up to initial amount
e
huge totals, negative (return 0?)
p
*** *** *** ***create a key*** *** *** ***
if amt is less than 0 return 0
if amt = 0 return 1
one by one, go thru coins array and find all possibilities of amount of coin that can be subtracted from the amt,
each new amount calls the fn again, but indicating the next coin needs to be taken
result of function (0 or 1 only) is added to this levels result
when loop is done, the memo at this level for this amount = the result
return it
}
*/
module.exports = {
  countingChange,
};
