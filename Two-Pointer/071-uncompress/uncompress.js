const uncompress = (s) => {
  let i = 0,
      j = 0;
  const arabic = new Set('0123456789');
  let str = '';
  while (j < s.length - 1){
    while (!arabic.has(s[i])) i++;
    j = i;
    while (arabic.has(s[j])) j++;
    str += s[j].repeat(+( s.slice(i,j) ) );
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
