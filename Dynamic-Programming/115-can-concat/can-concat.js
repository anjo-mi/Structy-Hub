const canConcat = (s, words, i = 0, memo = {}) => {
  if (i === s.length) return true;
  if (i  >  s.length) return false;
  if (i in memo) return memo[i];

  memo[i] = words.some(w => s.startsWith(w,i) && canConcat(s,words,i+w.length,memo));
  return memo[i];
};
console.log(canConcat("oneisnone", ["one", "none", "is"]), true);
console.log(canConcat("oneisnone", ["on", "e", "is"]), false);
console.log(canConcat("santahat", ["santah", "hat"]), false);
/*

*/
module.exports = {
  canConcat,
};
