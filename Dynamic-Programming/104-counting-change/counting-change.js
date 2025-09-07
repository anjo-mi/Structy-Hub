const countingChange = (amt, coins, i = 0, memo = {}) => {
  if (amt === 0) return 1;
  if (amt <   0) return 0;
  const k = amt + ';' + i;
  if (k in memo) return memo[k];
  let result = 0;
  const coin = coins[i];
  for (let q = 0 ; q * coin <= amt ; q++){
    result += countingChange(amt - (q * coin), coins, i + 1, memo);
  }
  memo[k] = result;
  return memo[k];
};
console.log(countingChange(24, [3, 5, 7]), 5);
console.log(countingChange(13, [2, 6, 12, 10]), 0);
console.log(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]), 1525987916);
/*
add a parameter for the index to keep track of position in coins array
add a parameter for memoizing

if the amount is = 0, (success), return 1
if the amount is < 0, (failure), return 0

make a key combining the amount remaining at this position in the coin array, + the position in the coin array

if that key exists in memo, return memo[key]

let result = 0;

for every quantity of the current coin we can deduct from the amount
  if a recursive call on that new amount is success, add 1 to the current result
  if a recursive call on that new amount is failure, add 0 to the current result
    (both are handled by the return at top of function)

memo for the current amount at the current level = the number of successes we just encountered at this current amount and current level

return that result
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
