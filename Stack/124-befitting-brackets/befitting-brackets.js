const befittingBrackets = (str) => {
  const stack = [];
  const pushes = new Set('({[');
  const pulls  = new Set(')}]');
  const correspond = {
    '}' : '{',
    ']' : '[',
    ')' : '('
  }

  for (const char of str){
    if (pushes.has(char)) stack.push(char);
    if (pulls.has(char)){
      if (!stack.includes(correspond[char])) return false;
      stack.pop();
    }
  }
  return !stack.length;
};
console.log(befittingBrackets('(){}[](())'), true);
console.log(befittingBrackets('[][}'), false);
console.log(befittingBrackets('{[]}({}'), false);
console.log(befittingBrackets(''), true);
/*
create a stack variable: []

if character is {,(,or [ push to stack
if character is },),or ]
  if open is in stack: remove corresponding opening bracket from stack (pop)
  else return false

return !stack.length
p
String (containing ONLY: '[]{}()')
r
Boolean: is the combo in proper order
  no matching close bracket before its open bracket
  no mathcing open bracket after its close bracket
e
empty string (return true)
non bracket characters? (filter out?)
p
*/



module.exports = {
  befittingBrackets,
};
