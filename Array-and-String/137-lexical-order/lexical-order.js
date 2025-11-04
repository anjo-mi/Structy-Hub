const lexicalOrder = (w1, w2, alpha) => {
  const order = {};
  for (let i = 0 ; i < alpha.length ; i++) order[alpha[i]] = i;
  let i = 0,
      j = 0;
  while (i < w1.length && j < w2.length){
    if (order[w1[i]] < order[w2[j]]) return true;
    if (order[w1[i]] > order[w2[j]]) return false;
    i++;
    j++;
  }
  return i >=w1.length;
};


const arab = "abcdefghijklmnopqrstuvwxyz";
console.log(lexicalOrder("apple", "dock", arab), true);
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
console.log(lexicalOrder("zoo", "dinner", alphabet), true);
const alpha = "ghzstijbacdopnfklmeqrxyuvw";
console.log(lexicalOrder("leaper", "leap", alpha), false);
module.exports = {
  lexicalOrder,
};
