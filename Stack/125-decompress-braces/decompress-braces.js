const decompressBraces = (s) => {
  const arab = new Set('123456789');
  const stack = [];
  for (let i = 0 ; i < s.length ; i++){
    if (s[i] === '{') stack.push(i);
    if (s[i] === '}'){
      const open = stack.pop();
      const bracks = s.slice(open,i+1);
      const exp = bracks.slice(1,-1);
      let numInd = open;
      while (arab.has(s[numInd - 1])) numInd--;
      const num = +s.slice(numInd,open);
      s = s.replace(s.slice(numInd,i+1),exp.repeat(num));
      i = s.lastIndexOf(exp) + exp.length - 1;
    }
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
