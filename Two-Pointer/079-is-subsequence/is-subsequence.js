const isSubsequence = (s1,s2,i=0,j=0) => {
  if (i === s1.length) return true;
  if (j === s2.length) return false;
  if (s1[i] === s2[j]) return isSubsequence(s1,s2,i+1,j+1);
  return isSubsequence(s1,s2,i,j+1);
};
/*

*/
console.log(isSubsequence("unfun", "unfortunate"),true);
console.log(isSubsequence("bde", "abcdef"), true);
console.log(isSubsequence("bda", "abcdef"), false);
console.log(isSubsequence("serr", "super"), false);

module.exports = {
  isSubsequence,
};
