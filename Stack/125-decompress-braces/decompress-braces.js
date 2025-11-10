const decompressBraces = (s) => {
  const arab = new Set('0123456789');
  const st = [];
  let i = 0;
  while (i < s.length){
    if (s[i] === '{') st.push(i);
    if (s[i] === '}'){
      const start = st.pop();
      const bracks = s.slice(start,i+1);
      const exp = s.slice(start+1,i);
      let numInd = start;
      while (arab.has(s[numInd-1])) numInd--;
      const num = +s.slice(numInd,start);
      s = s.replace(s.slice(numInd,i+1), exp.repeat(num));
      i = s.lastIndexOf(exp) + exp.length - 1;
    }
    i++;
  }
  return s;
};

console.log(decompressBraces("2{q}3{tu}v"), 'qqtututuv');
console.log(decompressBraces("2{y3{o}}s"), 'yoooyooos');
console.log(decompressBraces("2{3{r4{e}r}io}"), 'reeeerreeeerreeeerioreeeerreeeerreeeerio');
/*

*/

module.exports = {
  decompressBraces,
};
