const positioningPlants = (costs, i = 0 , prev = null, memo = {}) => {
  if (i === costs.length) return 0;
  const k = i + ';' + prev;
  if (k in memo) return memo[k];
  const possiblePlants = costs[i];
  let min = Infinity;
  for (let ind = 0 ; ind < possiblePlants.length ; ind++){
    if (ind !== prev){
      const cost = possiblePlants[ind];
      min = Math.min(
        min,
        positioningPlants(costs,i+1, ind, memo) + cost,
      );
    }
  }
  return memo[k] = min;
};
console.log(positioningPlants([
  [12, 14, 5, 13],
  [6, 3, 20, 3],
  [24, 12, 7, 2],
  [4, 80, 45, 3],
  [104, 13, 5, 14],
  [38, 19, 7, 6],
  [12, 2, 1, 2],
]), 26);

/*

{  prev: null  }

iterate thru the array (i = 0 as variable)
const k = i + ';' + prev;
if (k in memo) return memo[k];
possiblePlants = costs[i];
let min === Infinity;
for (let ind = 0 ; ind < possiblePlants.length ; ind++){
  if (ind !== prev){
    const cost = possiblePlants[ind];
    min = Math.min(
      min,
      positioningPlants(costs, i+1, prev = ind)
    ) + cost;
  }
}
return memo[k] = min;

*/

module.exports = {
  positioningPlants,
};
