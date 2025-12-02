const createCombinations = (arr, k) => {
  if (!arr.length || k <= 0) return [[]];

  const first = arr[0];
  const resultsWithFirst = [];
  const combosWith = createCombinations(arr.slice(1),k-1);
  for (const combo of combosWith) resultsWithFirst.push([...combo,first]);
  const combosWithout = createCombinations(arr.slice(1),k);

  return [...resultsWithFirst, ...combosWithout].filter(el => el.length === k);
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


console.log(createCombinations(["a", "b", "c"], 2));
console.log(createCombinations(["q", "r", "s", "t"], 2));
console.log(createCombinations(['q', 'r', 's', 't'], 3));
console.log(createCombinations([1, 28, 94], 3));

module.exports = {
  createCombinations,
};
