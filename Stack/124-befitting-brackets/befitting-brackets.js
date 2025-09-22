const befittingBrackets = (str) => {
  const closes = {
    '}' : '{',
    ']' : '[',
    ')' : '(',
  }
  const opens = {
    '{' : '}',
    '[' : ']',
    '(' : ')',
  }
  const stack = [];
  for (const char of str){
    if (char in opens) stack.push(char);
    if (char in closes){
      if (stack[stack.length - 1] !== closes[char]) return false;
      stack.pop();
    }
  }
  return !stack.length;
};


console.log(befittingBrackets('(){}[](())'), true);
console.log(befittingBrackets('[][}'), false);
console.log(befittingBrackets('{[]}({}'), false);
console.log(befittingBrackets(''), true);




module.exports = {
  befittingBrackets,
};
