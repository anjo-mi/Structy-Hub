const countCompounds = (comp, elms, i = 0, d = 0, memo = {}) => {
  if (!d) elms = elms.map(el => el.toLowerCase());
  if (i === comp.length) return 1;
  if (i >   comp.length) return 0;
  if (i in memo) return memo[i];

  let total = 0;
  for (const el of elms) if (comp.startsWith(el,i)) {
    total += countCompounds(comp,elms,i+el.length,d+1,memo);
  }
  return memo[i] = total;
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
