const compress = (s) => {
  let i = 0,
      j = 0,
      st = '';
  while (i < s.length && j < s.length){
    while (j < s.length && s[i] === s[j]) j++;
    if (s[i] !== s[j]){
      const sub = s.slice(i,j);
      st += sub.length > 1 ? sub.length + sub[0] : sub[0];
      i = j;
    }
  }
  return st;
};
console.log(compress('ccaaatsss'),'2c3at3s');
/*

*/
module.exports = {
  compress,
};
