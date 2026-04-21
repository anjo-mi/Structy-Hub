const getHeights = (graph,node,levels) => {
  if (!graph[node].length) levels[node] = 0;
  else{
    const max = Math.max(...graph[node].map(n => getHeights(graph,n,levels)));
    levels[node] = max + 1;
  }
  return levels[node];
};

const topologicalOrder = (graph) => {
  const levels = {};
  for (const node in graph) getHeights(graph,node,levels);
  return Object.keys(levels).sort((a,b) => levels[b] - levels[a]);
};

module.exports = {
  topologicalOrder,
};
