const uncompress = (s) => {
  const arabic = new Set('0123456789');
  let i = 0,
      j = 0,
      st = '';
  while (j < s.length){
    while (arabic.has(s[j]) && j < s.length) j++;
    st += s[j].repeat(+s.slice(i,j));
    j++;
    i=j;
  }
  return st;
};
/*

*/

console.log(uncompress("2c3a1t"),'ccaaat');
console.log(uncompress("3n12e2z"),'nnneeeeeeeeeeeezz');

module.exports = {
  uncompress,
};
