const pairedParentheses = (str) => {
  const s = [];
  for (const char of str){
    if (char === '(') s.push(char);
    if (char === ')') if (!s.pop()) return false
  }
  return !s.length
};
console.log(pairedParentheses("(david)((abby))"), true);
console.log(pairedParentheses(""), true);
console.log(pairedParentheses("(())(water)()"), true);
console.log(pairedParentheses("()rose(jeff"), false);
module.exports = {
  pairedParentheses,
};
