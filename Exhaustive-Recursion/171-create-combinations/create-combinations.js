const createCombinations = (arr, k) => {
  if (arr.length < k) return [];
  if (!k) return [[]]

  const res = [];
  const first = arr[0];
  const rest = arr.slice(1);

  for (const list of createCombinations(rest,k-1)){
    list.push(first);
    res.push(list);
  }
  
  for (const list of createCombinations(rest,k)) res.push(list);

  return res;
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
