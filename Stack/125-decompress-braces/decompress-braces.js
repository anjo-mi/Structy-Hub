const decompressBraces = (s) => {
  const arab = new Set('123456789');
  const stack = [];
  for (let i = 0; i < s.length ; i++){
    if (s[i] === '{') stack.push(i);
    if (s[i] === '}'){
      const start = stack.pop();
      const exp = s.slice(start+1,i);
      let numIndex = start;
      while (arab.has(s[numIndex-1])) numIndex--;
      const num = +s.slice(numIndex,start);
      const replaced = s.slice(numIndex,i+1);
      s = s.replace(replaced,exp.repeat(num));
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
