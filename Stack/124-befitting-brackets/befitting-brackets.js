const befittingBrackets = (str) => {
  const opens = { '[' : ']' , '{' : '}' , '(' : ')' };
  const close = { ']' : '[' , '}' : '{' , ')' : '(' };
  const s = [];
  for (const char of str){
    if (char in opens) s.push(char);
    if (char in close) if (s.pop() !== close[char]) return false;
  }
  return !s.length;
};


console.log(befittingBrackets('(){}[](())'), true);
console.log(befittingBrackets(''), true);
console.log(befittingBrackets('[][}'), false);
console.log(befittingBrackets('{[]}({}'), false);




module.exports = {
  befittingBrackets,
};
