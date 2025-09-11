const canConcat = (s, words, i = 0, memo = {}) => {
  if (i === s.length) return true;
  if (i >   s.length) return false;
  if (i in memo) return memo[i];

  const remnants = s.slice(i);
  memo[i] = words.some(word => {
    // console.log({remnants,word,i})
    return remnants.startsWith(word) && canConcat(s, words, i + word.length, memo)
  });

  return memo[i];
};
console.log(canConcat("oneisnone", ["one", "none", "is"]), true);
console.log(canConcat("oneisnone", ["on", "e", "is"]), false);
console.log(canConcat("santahat", ["santah", "hat"]), false);
/*
add i = 0, memo = {} to parameters

cant iterate thru array (bc we can use the same element multiple times)
  iterate thru string?

if (i === str.length) return true;
if (i >   str.length) return false;
if (i in memo) return memo[i];

const remnants = s.slice(i);
memo[i] = words.some(word => remnants.startsWith(word) && canConcat(s, words, i + word.length, memo)
return memo[i]
p
String, String Array
prolly add
  an index variable (0)
  a memo Object
r
Boolean, can any combo of string from the array, make initial string
e
empty String (return true?)
Empty array (return false)
p

add i = 0, memo = {} to parameters

cant iterate thru array (bc we can use the same element multiple times)
  iterate thru string?

if (i === str.length) return true;
if (i >   str.length) return false;
if (i in memo) return memo[i];

const remnants = s.slice(i);
memo[i] = words.some(word => remnants.startsWith(word) && canConcat(s, words, i + word.length, memo)
return memo[i]
*/
module.exports = {
  canConcat,
};
