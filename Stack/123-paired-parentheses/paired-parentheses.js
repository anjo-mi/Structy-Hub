const pairedParentheses = (str) => {
  const stack = [];
  for (const char of str){
    if (char === '(') stack.push(char);
    if (char === ')'){
      if (!stack.length) return false;
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
