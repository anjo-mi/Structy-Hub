const decompressBraces = (s) => {
  const nums = new Set('0123456789');
  const stack = [];
  for (const char of s){
    if (nums.has(char)) stack.push(char)
    else{
      if (char === '}'){
        let seg = '';
        while (!nums.has(stack[stack.length-1])) seg = stack.pop() + seg;
        const num = +stack.pop();
        stack.push(seg.repeat(+num));
      }else if (char !== '{') stack.push(char);
    }
  }
  return stack.join('');
};

console.log(decompressBraces("2{q}3{tu}v"), 'qqtututuv');
console.log(decompressBraces("2{y3{o}}s"), 'yoooyooos');
console.log(decompressBraces("2{3{r4{e}r}io}"), 'reeeerreeeerreeeerioreeeerreeeerreeeerio');
/*

*/

module.exports = {
  decompressBraces,
};
