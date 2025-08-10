const compress = (s) => {
  let str = '',
      i = 0,
      j = 0;
  while (j < s.length){
    while (s[i] === s[j]) j++;
    const sub = s.slice(i,j);
    str += sub.length > 1 ? sub.length + sub[0] : sub[0];
    i = j;
  }
  return str;
};
console.log(compress('ccaaatsss'),'2c3at3s');
/*

*/
module.exports = {
  compress,
};
