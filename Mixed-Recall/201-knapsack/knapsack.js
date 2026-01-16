const knapsack = (vals, wts, limit, i = 0, totalVal = 0, totalWt = 0, memo = {}) => {
  if (totalWt > limit) return 0;
  if (totalWt === limit) return totalVal;
  if (i === vals.length) return totalVal;
  const k = i + ';' + totalWt;
  if (k in memo) return memo[k];
  const combo = vals.reduce((a,el,i) => {
    a.push({ val: el , wt: wts[i] });
    return a;
  }, []);
  const {val,wt} = combo[i];
  return memo[k] = Math.max(
    knapsack(vals,wts,limit,i+1,totalVal + val, totalWt + wt, memo),
    knapsack(vals,wts,limit,i+1,totalVal, totalWt, memo)
  )
};




console.log(knapsack([5, 4, 9], [6, 1, 15], 20), 13);
console.log(knapsack([89, 45, 12, 50], [40, 20, 10, 15], 50), 107);
// console.log(knapsack(
//   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
//   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
//   100), 42);

module.exports = {
  knapsack,
};
