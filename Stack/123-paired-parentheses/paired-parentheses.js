const pairedParentheses = (str) => {
  const st = [];
  for (const char of str){
    if (char === '(') st.push(char);
    if (char === ')') if (!st.pop()) return false;
  }
  return !st.length;
};
console.log(pairedParentheses("(david)((abby))"), true);
console.log(pairedParentheses(""), true);
console.log(pairedParentheses("(())(water)()"), true);
console.log(pairedParentheses("()rose(jeff"), false);
module.exports = {
  pairedParentheses,
};
