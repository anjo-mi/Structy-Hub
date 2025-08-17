const uncompress = (s) => {
  let i = 0,
      j = 0,
      str = '',
      arabic = new Set('0123456789');
  while (i < s.length){
    while (i < s.length && !arabic.has(s[i])) i++;
    while (j < s.length && arabic.has(s[j])) j++;
    console.log({i,j})
    const length = +s.slice(i,j);
    str += s[j].repeat(length);
    console.log({i,j,s}, s.slice(i,j))
    j++;
    i = j;
  }
  return str;
};
/*

*/

console.log(uncompress("2c3a1t"),'ccaaat');
console.log(uncompress("3n12e2z"),'nnneeeeeeeeeeeezz');

module.exports = {
  uncompress,
};
