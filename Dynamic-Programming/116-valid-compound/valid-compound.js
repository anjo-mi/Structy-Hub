const validCompound = (compound, elements, i = 0, memo = {}) => {
  elements = elements.map(elm => elm.toLowerCase());
  if (i === compound.length) return true;
  if (i >   compound.length) return false;
  if (i in memo) return memo[i];
  
  const remainingCompound = compound.slice(i);
  
  memo[i] = elements.some(elm => {  
    return remainingCompound.startsWith(elm) && validCompound(compound,elements,i +   elm.length, memo);
  });
  return memo[i];
};
/*
add params: i = 0, memo = {}
if (i === compound.length) return true;
if (i >   compound.length) return false;
if (i in memo) return memo[i];

const remainingCompound = compound.slice(i);

memo[i] = elements.some(elm => {
  return remainingCompound.startsWith(elm) && validCompound(compound,elements,i + elm.length, memo);
});
return memo[i];
p
compound: String,
elements: String array,
prolly add:
  index: Number to track String traversal (default 0)
  memo: object to store results?
r
Boolean:
  can any combo of elements items make compound String?
e
numbers for duplicates? CO2, etc? (doesnt appear to be an issue)
p
*/

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
