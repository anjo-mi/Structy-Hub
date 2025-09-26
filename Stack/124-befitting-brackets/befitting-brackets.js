const befittingBrackets = (str) => {
  const opens  = {'{':'}','[':']','(':')'};
  const closes = {'}':'{',']':'[',')':'('};

  const stack = [];
  for (const char of str){
    if (char in opens) stack.push(char);
    else if (char in closes){
      if (!stack.length || stack[stack.length - 1] !== closes[char]) return false;
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
