const reverseSomeChars = (str, chars) => {
  chars = new Set(chars);
  const stack = [];
  for (const c of str) if (chars.has(c)) stack.push(c);
  let replacement = '';
  for (const c of str){
    if(chars.has(c)) replacement += stack.pop();
    else replacement += c;
  }
  return replacement;
};
/*
OPTIMIZE: dont map
  just iterate thru and add matches to stack
  second time you iterate, replace matches with stack.pop()
  return orig?

make a set from chars
make an empty stack = [];
map thru split string, any char that is in the set, gets replaced by something that we can retrieve
while (the stack has a length);
  replace retrievable with stack.pop()

return mapped split string join('')
p
str: String
chars: [String (single letters in these examples)];
r
String
  -> characters in chars array that appear in String
      should be in reverse order
e
chars[element].length > 1; (can still use well)
p
*/

console.log(reverseSomeChars("computer", ["a", "e", "i", "o", "u"]), 'cemputor');
console.log(reverseSomeChars("skateboard", ["a", "e", "i", "o", "u"]), 'skatobeard');
console.log(reverseSomeChars("airplane", ["m", "n", "r"]), 'ainplare');


module.exports = {
  reverseSomeChars,
};
