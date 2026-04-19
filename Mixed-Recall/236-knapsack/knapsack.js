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


module.exports = {
  knapsack,
};
