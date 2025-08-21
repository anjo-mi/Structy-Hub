const isSubsequence = (s1, s2) => {
  let i = 0,
      j = 0;
  while (i < s1.length && j < s2.length){
    while (j < s2.length && s1[i] !== s2[j]) j++;
    if (s1[i] === s2[j]){
      i++;
      j++;
    }
  }
  return i === s1.length;
};
/*

*/
console.log(isSubsequence("bde", "abcdef"), true);
console.log(isSubsequence("bda", "abcdef"), false);
console.log(isSubsequence("serr", "super"), false);
console.log(isSubsequence("unfun", "unfortunate"),true);

module.exports = {
  isSubsequence,
};
