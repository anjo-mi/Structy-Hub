const decompressBraces = (s) => {
  const arab = new Set('123456789');
  const stops = new Set('{}');
  const stack = [];
  for (let i = 0 ; i < s.length ; i++){
    if (!s.includes('{')) break;
    if (s[i] === '{') stack.push(i);

    if (s[i] === '}'){
      const start = stack.pop() + 1;
      let ind = start - 2;
      while (arab.has(s[ind])) ind--;
      
      const num = +s.slice(ind + 1,start - 1);
      const section = s.slice(start,i);
      const replace = s.slice(ind + 1,i + 1);
      s = s.replace(replace, section.repeat(num));
      i = s.lastIndexOf(section) + section.length - 1;
    }
  }
  return s;
};
// console.log(decompressBraces("2{q}3{tu}v"), 'qqtututuv');
// console.log(decompressBraces("2{y3{o}}s"), 'yoooyooos');
// console.log(decompressBraces("2{3{r4{e}r}io}"), 'reeeerreeeerreeeerioreeeerreeeerreeeerio');
/*

*/

module.exports = {
  decompressBraces,
};
