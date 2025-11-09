const reverseSomeChars = (str, chars) => {
  const s = [];
  chars = new Set(chars);
  for (const char of str) if (chars.has(char)) s.push(char);
  return str.split('').map(c => chars.has(c) ? s.pop() : c).join('');
};


console.log(reverseSomeChars("computer", ["a", "e", "i", "o", "u"]), 'cemputor');
console.log(reverseSomeChars("skateboard", ["a", "e", "i", "o", "u"]), 'skatobeard');
console.log(reverseSomeChars("airplane", ["m", "n", "r"]), 'ainplare');


module.exports = {
  reverseSomeChars,
};
