const quickestConcat = (s, words, i = 0 , memo = {}, d = 0) => {
  if (i === s.length) return 0;
  if (i >   s.length) return Infinity;
  if (i in memo) return memo[i];

  let min = Infinity;
  for (const w of words) if (s.startsWith(w,i)) {
    min = Math.min(quickestConcat(s,words,i+w.length,memo,1) + 1, min);
  }
  return memo[i] = !isFinite(min) && !(d) ? -1 : min;
};
console.log(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy']), -1);
console.log(quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']), 2);
console.log(quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']), 4);
console.log(quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu']), 7);
console.log(quickestConcat('rongbetty', ['wrong', 'bet']), -1);

module.exports = {
  quickestConcat,
};
