const uncompress = (s) => {
  const arab = new Set('1234567890');
  let i = 0,
      j = 0,
      st = '';
  while (i < s.length && j < s.length){
    while (arab.has(s[j])) j++;
    st += s[j].repeat(+s.slice(i,j));
    j++;
    i = j;
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
