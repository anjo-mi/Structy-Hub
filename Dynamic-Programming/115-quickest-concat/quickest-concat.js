const quickestConcat = (s, words, depth = 0, i = 0, memo = {}) => {
  if (i === s.length) return 0;
  if (i >   s.length) return Infinity;
  if (i in memo) return memo[i];

  const remnant = s.slice(i);
  let min = Infinity;
  for (const word of words){
    if (remnant.startsWith(word)){
      poss = quickestConcat(s, words, depth + 1, i + word.length, memo) + 1;
      if (poss < min) min = poss;
    }
  }
  memo[i] = min;
  return !isFinite(min) && !depth ? -1 : memo[i];
};

console.log(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy']), -1);
console.log(quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']), 2);
console.log(quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']), 4);
console.log(quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu']), 7);
console.log(quickestConcat('rongbetty', ['wrong', 'bet']), -1);

module.exports = {
  quickestConcat,
};
