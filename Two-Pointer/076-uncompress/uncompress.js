const uncompress = (s) => {
  const nums = new Set('0123456789');
  let i = 0,
      j = 0,
      st = '';
  while (j < s.length){
    while (nums.has(s[j])) j++;
    const num = s.slice(i,j);
    st += s[j].repeat(+num);
    j++;
    i = j;
  }
  return st;
};

console.log(uncompress("2c3a1t"),'ccaaat');
console.log(uncompress("3n12e2z"),'nnneeeeeeeeeeeezz');

module.exports = {
  uncompress,
};
