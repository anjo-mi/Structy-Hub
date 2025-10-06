const decompressBraces = (s) => {
  const arab = new Set('123456789');
  let i = 0,
      j = 0;
  const stack = [];
  for (let i = 0 ; i < s.length ; i++){
    if (s[i] === '{') stack.push(i);
    if (s[i] === '}'){
      const start = stack.pop();
      const replaced = s.slice(start,i+1);
      const exp = replaced.slice(1,-1);
      let numInd = start;
      while (arab.has(s[numInd-1])) numInd--;
      const num = +s.slice(numInd,start);
      const actualReplaced = s.slice(numInd,i+1);
      s = s.replace(actualReplaced,exp.repeat(num));
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
