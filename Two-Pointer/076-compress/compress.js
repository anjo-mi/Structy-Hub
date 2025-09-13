const compress = (s) => {
  let i = 0,
      j = 0,
      st = '';
  while (j < s.length){
    while (s[i] === s[j] && j < s.length) j++;
    const sub = s.slice(i,j);
    st += sub.length === 1 ? sub[0] : sub.length + sub[0];
    i = j;
  }
  return st;
}
console.log(compress('ccaaatsss'),'2c3at3s');
/*

*/
module.exports = {
  compress,
};
