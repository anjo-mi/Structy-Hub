const inOrder = (w1,w2,alph) => {
  const order = {};
  for (let i = 0 ; i < alph.length ; i++) order[alph[i]] = i;
  let i = 0,
      j = 0;
  while (i < w1.length && j < w2.length){
    if (w1[i] === w2[j]){
      i++;
      j++;
      continue;
    }
    if (order[w1[i]] < order[w2[j]]) return true;
    else return false;
  }
  return i === w1.length;
}

const detectDictionary = (dict, alpha) => {
  for (let i = 0 ; i < dict.length - 1 ; i++){
    if (!inOrder(dict[i],dict[i+1],alpha)) return false;
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
