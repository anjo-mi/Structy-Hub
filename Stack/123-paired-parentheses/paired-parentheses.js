const pairedParentheses = (str) => {
  const pars = [];
  let count = 0;
  for (const char of str){
    if (char === '('){
      pars.push(char);
      count++;
    }
    if (char === ')'){
      count--;
      if (count < 0) return false;
      pars.pop();
    }
  }
  return !pars.length
};
console.log(pairedParentheses("(david)((abby))"), true);
console.log(pairedParentheses("()rose(jeff"), false);
console.log(pairedParentheses(""), true);
console.log(pairedParentheses("(())(water)()"), true);
module.exports = {
  pairedParentheses,
};
