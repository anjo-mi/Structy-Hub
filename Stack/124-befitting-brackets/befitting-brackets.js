const befittingBrackets = (str) => {
  const opens = { '[' : ']' , '{' : '}' , '(' : ')' };
  const close = { ']' : '[' , '}' : '{' , ')' : '(' };
  const stack = [];
  for (const char of str){
    if (char in opens) stack.push(char);
    if (char in close) if (stack.pop() !== close[char]) return false;
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
