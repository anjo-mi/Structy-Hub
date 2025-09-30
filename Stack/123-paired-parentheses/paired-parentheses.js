const pairedParentheses = (str) => {
  const opens  = { '{':'}' , '[':']' , '(':')' };
  const closes = { '}':'{' , ']':'[' , ')':'(' };
  const stack = [];
  for (const char of str){
    if (char in opens) stack.push(char);
    if (char in closes){
      if (stack[stack.length-1] !== closes[char]) return false;
      stack.pop();
    }
  }
  return !stack.length;
};
console.log(pairedParentheses("(david)((abby))"), true);
console.log(pairedParentheses(""), true);
console.log(pairedParentheses("(())(water)()"), true);
console.log(pairedParentheses("()rose(jeff"), false);
module.exports = {
  pairedParentheses,
};
