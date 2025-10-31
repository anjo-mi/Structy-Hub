const quickestConcat = (s, words, i = 0 , depth = 0 , memo = {}) => {
  if (i === s.length) return 0;
  if (i  >  s.length) return Infinity;
  if (i in memo) return memo[i];

  const poss = words.map(w => s.startsWith(w,i) ? quickestConcat(s,words,i+w.length,depth+1,memo) + 1 : Infinity);
  const min = Math.min(...poss);

  return memo[i] = !isFinite(min) && !depth ? -1 : min;
};

console.log(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy']), -1);
console.log(quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']), 2);
console.log(quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']), 4);
console.log(quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu']), 7);
console.log(quickestConcat('rongbetty', ['wrong', 'bet']), -1);

module.exports = {
  quickestConcat,
};
