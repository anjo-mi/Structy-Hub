const tokenReplace = (s, tokens) => {
  const str = [];
  for (let i = 0 ; i < s.length ; i++){
    if (s[i] !== '$') str.push(s[i]);
    else{
      let j = i + 1;
      while (s[j] !== '$') j++;
      const token = s.slice(i,j+1);
      if (!token in tokens) return 'Invalid Token Entered!';
      str.push(tokens[token]);
      i = j;
    }
  }
  return str.join('');
};

module.exports = {
  tokenReplace,
};
