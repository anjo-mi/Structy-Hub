const nestingScore = (str) => {
  const stack = [0];
  for (const char of str){
    if (char === '[') stack.push(0);
    if (char === ']'){
      const curr = stack.pop();
      if (!curr) stack[stack.length - 1]++;
      else stack[stack.length-1] += curr * 2;
    }
  }
  return stack.pop();
};

console.log(nestingScore("[][[][]][[]]"), 7);
console.log(nestingScore("[]"), 1);
console.log(nestingScore("[][][]"), 3);
console.log(nestingScore("[[][][]]"), 6);
console.log(nestingScore("[[[[[[[][]]]]]]][]"), 129);
/*
[[[[[[[][]]]]]]]
[[[[[[1+1]]]]]]
[[[[[[2]]]]]]
[[[[[4]]]]]
[[[[8]]]]
[[[16]]]
[[32]]
[64]
128
*/



/*
p
String ( consisting of only '[' , ']' )
r
Number: total "score" of brackets
- any empty bracket is worth one point
- any sequential pair of brackets is worth 1 point each
- any bracket containing brackets within, multiplies their score by two
    ( [ [1] ] ) // 2 ,
    ( [ [1] [1] ] ) // 4 ,
      exterior bracket multiplies interior by 2
      (not counted on its own)
e
above*


*/





module.exports = {
  nestingScore,
};
