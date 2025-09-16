const countCompounds = (comp, elms, i = 0, memo = {}) => {
  elms = elms.map(elm => elm.toLowerCase());
  if (i === comp.length) return 1; // success
  if (i >   comp.length) return 0; // failure
  if (i in memo) return memo[i];

  const rem = comp.slice(i);
  let result = 0;
  for (const elm of elms){
    if (rem.startsWith(elm)) result += countCompounds(comp, elms, i + elm.length, memo);
  }
  memo[i] = result;
  return memo[i];
};
/*
add parameters: i = 0, memo = {}

map elms to be lowerCase

if (i === comp.length) return 1; // success
if (i >   comp.length) return 0; // failure (prolly won't reach this point, but safety?)

if (i in memo) return memo[i];
slice the comp-string to get the location were at in comp
make a result variable
iterate thru every elm of elms,
  if the sliced word starts with the elm AND it returns 1 when called recursively at new compound position
    result++ (+= result of function)
  else continue (if i can +=, this is unnecessary because of return 0 at the top)

memo[i] = result;
return memo[i]
p
comp: String
elms: String-Array
prolly add:
  i: Number (track place in comp String)
  memo: Object (track previous calc's)
r
Number: how many ways can you use Strings in elms to make comp:String
e
elms empty: return 0
empty string: return 1
p
  
*/
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
