const nestingScore = (str) => {
  const stack = [0];
  for (const brack of str){
    if (brack === '[') stack.push(0);
    else if(brack === ']'){
      const count = stack.pop();
      if (!count) stack[stack.length - 1] += 1;
      else stack[stack.length-1] += count * 2;
    }
  }
  return stack.pop();
};

module.exports = {
  nestingScore,
};
