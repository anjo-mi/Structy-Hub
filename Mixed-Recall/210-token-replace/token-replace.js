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

const tokens = {
  $second$: "beta",
  $first$: "alpha",
  $third$: "gamma",
};
console.log(tokenReplace("$first$second$third$", tokens), 'alphasecondgamma');

module.exports = {
  tokenReplace,
};
