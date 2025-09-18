const validCompound = (compound, elements, i = 0, memo = {}) => {
  elements = elements.map(elm => elm.toLowerCase());
  if (i in memo) return memo[i];
  if (i === compound.length) return true;
  if (i > compound.lenght) return false;

  const rem = compound.slice(i);
  memo[i] = elements.some(elm => rem.startsWith(elm) && validCompound(compound,elements,i + elm.length, memo))

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

module.exports = {
  validCompound,
};
