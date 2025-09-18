const pairedParentheses = (str) => {
  const counter = {};
  for (const char of str){
    if (char === '(') counter.parentheses = (counter.parentheses || 0) + 1;
    if (char === ')') {
      counter.parentheses = (counter.parentheses || 0) - 1;
      if (counter.parentheses < 0) return false;
    }
  }
  return !counter.parentheses;
};
console.log(pairedParentheses("(david)((abby))"), true);
console.log(pairedParentheses("()rose(jeff"), false);
console.log(pairedParentheses(""), true);
console.log(pairedParentheses("(())(water)()"), true);
/*
if we encounter a closing parentheses before we encounter an open one
  return false
if we get thru the whole string without returning false, return true

make a counter object with prop 'openvsclose' (rename)
add one every time we see a '('
subtract one every time we see a ')'
if its ever negative (we've closed without opening) return false

if 0: return true
if anything other than 0: return false
p
String (containing '(' + ')' and letters)
r
Boolean -> do the parentheses work as an expression?
  no closed parentheses before opened
  no opened parentheses before closed
  same number of opens and closes
e
empty string (return true)
0 opens and 0 closes (true??)
p

*/

module.exports = {
  pairedParentheses,
};
