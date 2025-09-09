const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  if (i === j) return 1;
  if (i >   j) return 0;
  
  const key = i + ';' + j;
  if (key in memo) return memo[key];

  if (str[i] === str[j]) memo[key] = maxPalinSubsequence(str,i+1,j-1,memo) + 2;
  else memo[key] = Math.max(
    maxPalinSubsequence(str,i+1,j,memo),
    maxPalinSubsequence(str,i,j-1,memo)
  );

  return memo[key];
};

console.log(maxPalinSubsequence("luwxult"), 5);
console.log(maxPalinSubsequence("chartreusepugvicefree"), 7);
console.log(maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe"), 31);
/*
add parameters for i = 0, j = str.length-1, memo = {}
if i === j, return 1
if i > j, return 0
make a key from i and j ( i + ';' + j)
if key in memo return memo[key]

find the maximum length beneath counting down from each side
  const inner = Math.max(
  maxPalinSubsequence(str,i+1, j, memo),
  maxPalinSubsequence(str,i, j-1, memo)
  )

memo[key] = s[i] === s[j] ? inner + 2 : inner;
return memo[key]
p
String of characters
prolly add:
  index tracker(s) at front and end
  memo object to track recursive calls
r
Number - longest palindrome, can omit characters that dont fit into it
e
1 character string -> return 1
empty string? -> return 0
p

*/

module.exports = {
  maxPalinSubsequence,
};
