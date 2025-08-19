const minChange = (amt, coins, memo = {},depth = 0) => {
  if (amt === 0) memo[amt] = 0;
  if (amt < 0) return Infinity;
  if (amt in memo) return memo[amt];

  let min = Infinity;
  for (const coin of coins){
    const cns = 1 + minChange(amt - coin, coins, memo, depth + 1);
    if (cns < min) min = cns;
  }
  
  memo[amt] = min;
  return memo[amt] === Infinity && !depth ? -1 : memo[amt];
};
/*
p
Number (should always be positive?),
Array of Numbers,
prolly gona add a memo {} as a parameter
r
Number: least amount of combos needed from array to sum to Num parameter
        or -1 if no combo from array sums to the number
e
negatives (seems impossible since you can't owe negative change)
0 initial -> return 0
empty array should be handled by the negative 1 return

p : return memo[amt] at end!
add memo to params
base cases:
- if (amt === 0) memo[amt] = 0
- if (amt < 0) memo[amt] = -1 (maybe Infinity?)
- if (amt in memo) return memo[amt]



: return memo[amt] at end!
*/
console.log(minChange(8, [1, 5, 4, 12]), 2);
console.log(minChange(13, [1, 9, 5, 14, 30]), 5);
console.log(minChange(102, [1, 5, 10, 25]) ,6);
console.log(minChange(271, [10, 8, 265, 24]), -1);

module.exports = {
  minChange,
};
