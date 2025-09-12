const quickestConcat = (s, words, depth = 0, i = 0, memo = {}) => {
  if (i === s.length) return 0;
  if (i >   s.length) return Infinity;
  if (i in memo) return memo[i];

  const remainingString = s.slice(i);
  let min = Infinity;

  for (const word of words){
    if (remainingString.startsWith(word)){
      const result = quickestConcat(s, words,depth + 1, i + word.length, memo) + 1;
      if (result < min) min = result;
    }
  }

  memo[i] = min;
  return !isFinite(memo[i]) && !depth ? -1 : memo[i];
};
console.log(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy']), -1);
console.log(quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']), 2);
console.log(quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']), 4);
console.log(quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu']), 7);
console.log(quickestConcat('rongbetty', ['wrong', 'bet']), -1);

// add parameters:
//   i = 0
//   memo = {}
// if (i === s.length) return 0
// if (i >   s.length) return Infinity
// if (i in memo) return memo[i];

// slice the string at index (i)
// make a min variable set to Infinity

// for every word in the array=>
//   if the sliced string starts with the word
//     call the function again
//       with ORIGINAL WORD (not sliced word)
//       index + word.length
//       (and add 1?) to result
//     if result is less than min,, min = result

// memo[i] = min
// return memo[i]
/*
p
String, String Array
prolly add:
  index tracker
  memo object
r
Number, fewwest amount of elements that can be concatenated to make the String
e
same result from multiple elements (return either)
empty string? return 0?
empty array - return -1
p

*/
module.exports = {
  quickestConcat,
};
