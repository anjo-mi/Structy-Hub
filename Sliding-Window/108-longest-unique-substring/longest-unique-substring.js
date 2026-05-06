const longestUniqueSubstring = (s) => {
  let leng = 1;
  let max = leng;
  const map = new Map();
  map.set(s[0], 0);
  let curr = 0;
  for (let i = 1 ; i < s.length ; i++){
    const char = s[i];
    if (map.has(char) && map.get(char) >= curr){
      curr = map.get(char) + 1;
    }
    map.set(char, i);
    max = Math.max(max, (i - curr) + leng);
  }
  return max;
};

console.log(longestUniqueSubstring("abcabcqbb"),4);
console.log(longestUniqueSubstring("tmmzuxt"),5);
console.log(longestUniqueSubstring("racecarisgreatness"),8);

/**
*/

module.exports = {
  longestUniqueSubstring,
};
