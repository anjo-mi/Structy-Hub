const getDists = (key,graph, dists) => {
  if (key in dists) return dists[key];
  if (!graph[key].length) dists[key] = 0;
  else{
    let max = -Infinity;
    for (const pre of graph[key]){
      max = Math.max(max, getDists(pre,graph,dists) + 1);
    }
    dists[key] = (dists[key] || 0) + max;
  }
  return dists[key];
}

const safeCracking = (hints) => {
  const graph = {};
  for (const [a,b] of hints){
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[b].push(a);
  }
  const dists = {};
  for (const key in graph){
    getDists(key,graph,dists);
  }
  return Object.keys(dists).sort((a,b) => dists[a] - dists[b]).join('');
};


console.log(safeCracking([
  [3, 1],
  [4, 7],
  [5, 9],
  [4, 3],
  [7, 3],
  [3, 5],
  [9, 1],
]),  '473591');
console.log(safeCracking([
  [7, 1],
  [1, 8],
  [7, 8],
]), '718');
console.log(safeCracking([
  [2, 5],
  [8, 6],
  [0, 6],
  [6, 2],
  [0, 8],
  [2, 3],
  [3, 5],
  [6, 5],
]), '086235');
module.exports = {
  safeCracking,
};
