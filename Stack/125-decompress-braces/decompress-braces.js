const decompressBraces = (s) => {
  const nums = new Set('0123456789');
  const st = [];
  for (const char of s){
    if (nums.has(char)) st.push(char);
    else{
      if(char === '}'){
        let seg = '';
        while (!nums.has(st[st.length-1])) seg = st.pop() + seg;
        const num = +st.pop();
        st.push(seg.repeat(num))
      }else if (char !== '{') st.push(char);
    }
  }
  return st.join('');
};

console.log(decompressBraces("2{q}3{tu}v"), 'qqtututuv');
console.log(decompressBraces("2{y3{o}}s"), 'yoooyooos');
console.log(decompressBraces("2{3{r4{e}r}io}"), 'reeeerreeeerreeeerioreeeerreeeerreeeerio');
/*

*/

module.exports = {
  decompressBraces,
};
