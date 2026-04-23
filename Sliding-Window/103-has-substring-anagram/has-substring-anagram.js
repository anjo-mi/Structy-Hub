const isMatch = (s1,s2) => {
  for (const char of s1){
    if (!s2.has(char)) return false;
  }
  
  for (const char of s2){
    if (!s1.has(char)) return false;
  }

  return true;
}

const hasSubstringAnagram = (s, anagram) => {
  ana = new Set(anagram);
  let curr = s.slice(0,anagram.length);
  for (let i = 0 ; i < s.length - anagram.length ; i++){
    const currSet = new Set(curr);
    if (isMatch(currSet,ana)) return true;
    curr = curr.slice(1) + s[i + anagram.length];
  }
  const currSet = new Set(curr);
  return isMatch(currSet,ana);
};

console.log(hasSubstringAnagram("breakdowns", "snow"))

module.exports = {
  hasSubstringAnagram,
};
