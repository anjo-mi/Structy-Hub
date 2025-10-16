const reverseSomeChars = (str, chars) => {
  chars = new Set(chars);
  const stack = [];
  for (const char of str) if (chars.has(char)) stack.push(char);
  return str.split('').map(char => chars.has(char) ? stack.pop() : char).join('')
};


console.log(reverseSomeChars("computer", ["a", "e", "i", "o", "u"]), 'cemputor');
console.log(reverseSomeChars("skateboard", ["a", "e", "i", "o", "u"]), 'skatobeard');
console.log(reverseSomeChars("airplane", ["m", "n", "r"]), 'ainplare');


module.exports = {
  reverseSomeChars,
};
