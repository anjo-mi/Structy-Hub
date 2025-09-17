const quickestConcat = (s,words) => {
  const min = _quickestConcat(s,words);
  return isFinite(min) ? min : -1;
}

const _quickestConcat = (s, words, i = 0, memo = {}) => {
  if (i === s.length) return 0;
  if (i >   s.length) return Infinity;
  if (i in  memo)     return memo[i];

  const rem = s.slice(i);
  let counts = words.map(w => {
    if (rem.startsWith(w)) return _quickestConcat(s,words,i+w.length,memo) + 1;
    else return Infinity;
  })

  memo[i] = Math.min(...counts.filter(count => count >= 0));
  return memo[i];
};

console.log(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy']), -1);
console.log(quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']), 2);
console.log(quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']), 4);
console.log(quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu']), 7);
console.log(quickestConcat('rongbetty', ['wrong', 'bet']), -1);

module.exports = {
  quickestConcat,
};
