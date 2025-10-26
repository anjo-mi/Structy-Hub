const decompressBraces = (s) => {
  const nums = '123456789';
  const stack = [];
  for (let char of s) {
    if (nums.includes(char)) {
      stack.push(Number(char));
    } else {
      if (char === '}') {
        let seg = '';
        while (typeof stack[stack.length - 1] !== 'number') {
          const pop = stack.pop();
          seg = pop + seg;
        }
        const number = stack.pop();
        stack.push(repeat(seg, number));
      } else if (char !== '{') {
        stack.push(char);
      }
    }
  }
  
  return stack.join('');
};

const repeat = (str, n) => {
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += str;
  }
  return result;
};
console.log(decompressBraces("2{q}3{tu}v"), 'qqtututuv');
console.log(decompressBraces("2{y3{o}}s"), 'yoooyooos');
console.log(decompressBraces("2{3{r4{e}r}io}"), 'reeeerreeeerreeeerioreeeerreeeerreeeerio');
/*

*/

module.exports = {
  decompressBraces,
};
