const createCombinations = (arr, k) => {
  if (arr.length < k) return [];
  if (!k) return [[]];
  const combos = [];
  const first = arr[0];

  const remsWith = createCombinations(arr.slice(1), k-1);
  const remsWithout = createCombinations(arr.slice(1), k);
  for (const c of remsWith) combos.push([first,...c]);
  return [...combos,...remsWithout];
};
/*
if !items or k <= 0 return [[]];

extract first element
make a resultsWithFirst []
call the fn on (.slice(1), k-1)
push each result concat first to resultsWith

make a resultsWithoutFirst = fn(.slice(1), k NOT MINUS 1)
return [...,...]
*/

console.log(createCombinations(['q', 'r', 's', 't'], 3));

module.exports = {
  createCombinations,
};
