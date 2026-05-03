const isMatch = (c1,c2) => {
  for (const char in c1){
    if (c1[char]) if (c1[char] !== c2[char]) return 0;
  }
  for (const char in c2){
    if (c2[char]) if (c2[char] !== c1[char]) return 0;
  }
  return 1;
}

const countSubstringAnagrams = (s, anagram) => {
  const ana = anagram.split('').reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {});
  const curr = s.slice(0,anagram.length).split('').reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {})
  let count = isMatch(ana,curr);
  for (let i = 0 ; i < s.length - anagram.length ; i++){
    const first = s[i];
    const next = s[i + anagram.length];
    curr[first] -= 1;
    curr[next] = (curr[next] || 0) + 1;
    count += isMatch(curr,ana);
  }
  return count;
};


module.exports = {
  countSubstringAnagrams,
};
