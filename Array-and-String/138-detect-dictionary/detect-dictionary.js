const lexicalOrder = (w1, w2, alpha) => {
  const order = {};
  for (let i = 0 ; i < alpha.length ; i++)  order[alpha[i]] = i;
  let i = 0, 
      j = 0;
  while (i < w1.length && j <w2.length){
    if (order[w1[i]] < order[w2[j]]) return true;
    if (order[w1[i]] > order[w2[j]]) return false;
    i++;
    j++;
  }
  return i === w1.length;
};

const detectDictionary = (dict, alpha) => {
  for (let i = 0 ; i < dict.length - 1; i++){
    if (!lexicalOrder(dict[i],dict[i+1],alpha)) return false;
  }
  return true;
};
const dictionar = ["zoo", "tick", "tack", "door"];
const alphabe = "ghzstijbacdopnfklmeqrxyuvw";
console.log(detectDictionary(dictionar, alphabe), true);
const dictionary = ["zoo", "tack", "tick", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
console.log(detectDictionary(dictionary, alphabet), false);


module.exports = {
  detectDictionary,
};
