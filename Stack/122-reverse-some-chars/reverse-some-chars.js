const reverseSomeChars = (str, chars) => {
  chars = new Set(chars);
  const remmed = [];
  for (const char of str){
    if (chars.has(char)) remmed.push(char);
  }
  return str.split('').map(char => {
    if (chars.has(char)) return remmed.pop();
    return char;
  }).join('');
};


console.log(reverseSomeChars("computer", ["a", "e", "i", "o", "u"]), 'cemputor');
console.log(reverseSomeChars("skateboard", ["a", "e", "i", "o", "u"]), 'skatobeard');
console.log(reverseSomeChars("airplane", ["m", "n", "r"]), 'ainplare');


module.exports = {
  reverseSomeChars,
};
