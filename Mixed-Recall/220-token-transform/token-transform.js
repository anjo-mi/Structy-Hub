const tokenReplace = (s, tokens) => {
  const str = [];
  for (let i = 0 ; i < s.length ; i++){
    if (s[i] !== '$') str.push(s[i]);
    else{
      let j = i + 1;
      while (s[j] !== '$') j++;
      const token = s.slice(i,j+1);
      if (!token in tokens) throw new Error('Invalid Token Entered');
      str.push(tokens[token]);
      i = j;
    }
  }
  return str.join('');
};

const tokenTransform = (s, tokens) => {
  for (const token in tokens) tokens[token] = tokenReplace(tokens[token],tokens);
  while (s.includes('$')) s = tokenReplace(s,tokens);
  return s;
};

module.exports = {
  tokenTransform,
};
