const countCompounds = (comp, elms, i = 0, memo = {}) => {
  if (i === comp.length) return 1;
  if (i  >  comp.length) return 0;
  if (i in memo) return memo[i];

  elms = elms.map(el => el.toLowerCase());

  let res = 0;
  for (const elm of elms){
    if (comp.startsWith(elm,i)){
      res += countCompounds(comp,elms,i+elm.length,memo);
    }
  }
  memo[i] = res;
  return memo[i];
};


console.log(countCompounds("neco", [
  "Ne",
  "O",
  "Be",
  "I",
  "N",
  "Os",
  "Si",
  "S",
  "Co",
  "C",
  "Ir",
]), 2);
console.log(countCompounds("hocli", [
  "C",
  "Cl",
  "I",
  "Ho",
  "Li",
  "La",
  "H",
  "O"
]), 4);
console.log(countCompounds("nerco", [
  "Ne",
  "O",
  "Be",
  "I",
  "N",
  "Os",
  "Si",
  "S",
  "Co",
  "C",
  "Ir",
]), 0);
console.log(countCompounds("cocococococococococococococococococococococococococococococox", [
  "Ne",
  "O",
  "Be",
  "I",
  "N",
  "Os",
  "Si",
  "S",
  "Co",
  "C",
  "Ir",
]),0);

module.exports = {
  countCompounds,
};
