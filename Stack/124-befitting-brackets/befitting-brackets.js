const befittingBrackets = (str) => {
  const opens = { '{':'}' , '[':']' , '(':')' };
  const closes = { '}':'{' , ']':'[' , ')':'(' };
  const stack = [];

  for (const char of str){
    if (char in opens) stack.push(char);
    if (char in closes) if (stack.pop() !== closes[char]) return false;
  }
  return !stack.length;
};


console.log(befittingBrackets('(){}[](())'), true);
console.log(befittingBrackets(''), true);
console.log(befittingBrackets('[][}'), false);
console.log(befittingBrackets('{[]}({}'), false);




module.exports = {
  befittingBrackets,
};
