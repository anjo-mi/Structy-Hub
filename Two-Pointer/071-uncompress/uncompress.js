const uncompress = (s) => {
  const arab = new Set('1234567890');
  let i = 0,
      j = 0,
      st = '';
  while (j < s.length){
    while (j <= s.length && arab.has(s[j])) j++;
    // if (j === s.length) break;
    const num = +s.slice(i,j);
    st += s[j].repeat(num);
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
