const overlapSubsequence = (s1,s2,i = 0, j = 0, memo = {}) => {
  const k = i+';'+j;
  if (k in memo) return memo[k];
  if (i >= s1.length) return 0;
  if (j >= s2.length) return 0;

  if (s1[i] === s2[j]) return memo[k] = 1 + overlapSubsequence(s1,s2,i+1,j+1,memo);
  return memo[k] = Math.max(
    overlapSubsequence(s1,s2,i+1,j,memo),
    overlapSubsequence(s1,s2,i,j+1,memo)
  );
};
console.log(overlapSubsequence("xcyats", "criaotsi"), 4);
console.log(overlapSubsequence(
  "mumblecorebeardleggingsauthenticunicorn",
  "succulentspughumblemeditationlocavore"
), 15);
/*

*/


module.exports = {
  overlapSubsequence,
};
