const lexicalOrder = (w1, w2, alpha) => {
  const order = {};
  for (let i = 0 ; i < alpha.length ; i++) order[alpha[i]] = i;
  let i = 0,
      j = 0;
  while (i < w1.length && j < w2.length){
    if (w1[i] === w2[j]){
      i++;
      j++;
      continue;
    }
    else return order[w1[i]] < order[w2[j]];
  }
  return i >= w1.length;
};
/*
make an order object
iterate thru alphabet -> put char and index in object
while (w1 and w2 length){
if (w1[0] === w2[0]) w1 = w1.slice(1) w2 = w2.slice(1) continue;

return (order[w1[0]] <= order[w2[0]]) return true;
}

return !w1.length

p
String - w1,
String - w2,
String - defined alphabetical order for a-z
* ALL CHARS ARE LOWERCASE *
r
Boolean (given the alphabetical order should w1 come first?)
e
empty strings? (empty should come first)
same strings? (true)
p
*/

const arab = "abcdefghijklmnopqrstuvwxyz";
console.log(lexicalOrder("apple", "dock", arab), true);
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
console.log(lexicalOrder("zoo", "dinner", alphabet), true);
const alpha = "ghzstijbacdopnfklmeqrxyuvw";
console.log(lexicalOrder("leaper", "leap", alpha), false);
module.exports = {
  lexicalOrder,
};
