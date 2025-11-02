const countCompounds = (comp, elms, i = 0 , memo = {}) => {
  elms= elms.map(el => el.toLowerCase());
  if (i === comp.length) return 1;
  if (i >   comp.length) return 0;
  if (i in memo) return memo[i];

  let res = 0;
  for (const el of elms){
    if (comp.startsWith(el,i)) res += countCompounds(comp,elms,i+el.length,memo);
  }

  return memo[i] = res;
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
