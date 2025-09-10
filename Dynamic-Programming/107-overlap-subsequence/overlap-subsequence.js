const overlapSubsequence = (s1,s2,i=0,j=0,memo={}) => {
  const k = i + ';' + j;
  if (k in memo) return memo[k];
  if (i >= s1.length || j >= s2.length) return 0;

  if (s1[i] === s2[j]){
    memo[k] = 1 + overlapSubsequence(s1,s2,i+1,j+1,memo);
  }else memo[k] = Math.max(
    overlapSubsequence(s1,s2,i+1,j,memo),
    overlapSubsequence(s1,s2,i,j+1,memo)
  )
  return memo[k];
};
console.log(overlapSubsequence("xcyats", "criaotsi"), 4);
console.log(overlapSubsequence(
  "mumblecorebeardleggingsauthenticunicorn",
  "succulentspughumblemeditationlocavore"
), 15);
/*
add parameters for i = 0 (and def j = 0), and memo = {}
make a key i + ';' + j;
if (key in memo) return memo[key];
if (i || j is longer than their respective strings) return 0

if they equal each other (s1[i] + s2[j])
  1 is added to the score of the next step for each
if they dont equal each other
  the maximum of eithers next step is taken
^^^^^^^^^^^^^^^
whatever that result is (if/else above) gets set to memo[key]
return memo[key];
p
Strings: s1 and s2
will prolly add:
  Number(s): index tracker (maybe 2)
  Object: memo tracking
r
Number, longest sequence of characters matching between s1 and s2
  (interior characters not withstanding)
    ['axy' -> 'aby'] // 2 (can remove interior characters)
e
either string is empty? return 0
answer can never be longer than the shortest string
  (not really an edge case, just a fact)
p
*/


module.exports = {
  overlapSubsequence,
};
