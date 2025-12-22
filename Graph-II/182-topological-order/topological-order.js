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

/*
find the 'lowest' nodes,
any parent gets plus 1

make an object of levels {}
iterate thru the graph
if (graph[node]) doesnt have a length, this means its on the 'lowest' level
  - place it into the graph at 0
  - continue next loop iteration
for every 'child' of the node, call this function on it
  - the current node goes into the graph set at the max of the children plus 1
return the keys of the levels {}, in descending order (by their associated values)
*/


console.log(topologicalOrder({
  h: ["l", "m"],
  i: ["k"],
  j: ["k", "i"],
  k: ["h", "m"],
  l: ["m"],
  m: [],
}), ['j', 'i', 'k', 'h', 'l', 'm']);
console.log(topologicalOrder({
  q: [],
  r: ["q"],
  s: ["r"],
  t: ["s"],
}), ['t', 's', 'r', 'q']);
module.exports = {
  topologicalOrder,
};
