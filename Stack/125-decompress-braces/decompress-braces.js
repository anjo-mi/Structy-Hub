const decompressBraces = (s) => {
  const stack = [];
  const arab = new Set('123456789');
  let i = 0;
  while (i < s.length){
    if (s[i] === '{') stack.push(i);
    if (s[i] === '}'){
      const start = stack.pop();
      const brackets = s.slice(start,i+1);
      const expression = s.slice(start+1,i);
      let numInd = start;
      while (arab.has(s[numInd-1])) numInd--;
      const num = +s.slice(numInd,start);
      const replaced = s.slice(numInd,i+1);
      s = s.replace(replaced,expression.repeat(num));
      i = s.lastIndexOf(expression) + expression.length - 1;
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
