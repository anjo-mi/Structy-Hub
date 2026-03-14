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

console.log(createCombinations(['q', 'r', 's', 't'], 3));

module.exports = {
  createCombinations,
};
