const nestingScore = (str) => {
  const s = [0];
  for (const char of str){
    if (char === '[') s.push(0);
    if (char === ']'){
      const c = s.pop();
      if (!c) s[s.length - 1]++;
      else s[s.length-1] += c * 2;
    }
  }
  return s.pop();
};


console.log(nestingScore("[][[][]][[]]"), 7);
console.log(nestingScore("[]"), 1);
console.log(nestingScore("[][][]"), 3);
console.log(nestingScore("[[][][]]"), 6);
console.log(nestingScore("[[[[[[[][]]]]]]][]"), 129);






module.exports = {
  nestingScore,
};
