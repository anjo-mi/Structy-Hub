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
module.exports = {
  positioningPlants,
};
