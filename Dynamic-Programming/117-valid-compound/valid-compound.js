const validCompound = (compound, elements, i = 0, memo = {}) => {
  elements = elements.map(el => el.toLowerCase());
  if (i === compound.length) return true;
  if (i  >  compound.length) return false;
  if (i in memo) return memo[i];

  memo[i] = elements.some(el => compound.startsWith(el,i) && validCompound(compound,elements,i + el.length, memo));

  return memo[i];
};
console.log(validCompound("neco", [
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
]), true);
console.log(validCompound("sir", [
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
]), true);
console.log(validCompound("nerco", [
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
]), false);

module.exports = {
  validCompound,
};
