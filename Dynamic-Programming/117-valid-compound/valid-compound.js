const validCompound = (cmpd, els, i = 0, memo = {}) => {
  els = els.map(el => el.toLowerCase());
  if (i === cmpd.length) return true;
  if (i > cmpd.length) return false;
  if (i in memo) return memo[i];

  return memo[i] = els.some(el => cmpd.startsWith(el,i) && validCompound(cmpd,els,i + el.length,memo));
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
