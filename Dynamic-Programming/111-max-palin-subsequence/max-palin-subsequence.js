const maxPalinSubsequence = (str, i = 0 , j = str.length-1, memo = {}) => {
  const k = i + ';' + j;
  if (k in memo) return memo[k];
  if (i > j) return 0;
  if (i === j) return 1;

  if (str[i] === str[j]) return memo[k] = 2 + maxPalinSubsequence(str,i+1,j-1,memo);
  else return memo[k] = Math.max(
    maxPalinSubsequence(str,i+1,j,memo),
    maxPalinSubsequence(str,i,j-1,memo)
  );
};

console.log(maxPalinSubsequence("luwxult"), 5);
console.log(maxPalinSubsequence("chartreusepugvicefree"), 7);
console.log(maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe"), 31);
/*

*/
module.exports = {
  maxPalinSubsequence,
};
