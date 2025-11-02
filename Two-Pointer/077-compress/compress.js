const compress = (s) => {
  let i = 0,
      j = 0,
      string = '';
  while (j < s.length){
    while (s[i] === s[j]) j++;
    const sub = s.slice(i,j);
    string += sub.length > 1 ? sub.length + sub[0] : sub[0];
    i = j;
  }
  return string;
}
console.log(compress('ccaaatsss'),'2c3at3s');
/*

*/
module.exports = {
  compress,
};
