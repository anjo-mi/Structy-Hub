const connectedComponentsCount = (graph) => {
  const islands = [];
  for (const node in graph){
    if ( islands.some(isle => isle.has(+node)) ) continue;
    const isle = new Set();
    const q = [node];
    while (q.length){
      const curr = q.shift();
      if (isle.has(+curr)) continue;
      isle.add(+curr);
      for (const n of graph[curr]) if (!isle.has(n)) q.push(n);
    }
    islands.push(isle);
  }
  return islands.length;
};

console.log(connectedComponentsCount({
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
}),1);

// console.log(connectedComponentsCount({
//   0: [4,7],
//   1: [],
//   2: [],
//   3: [6],
//   4: [0],
//   6: [3],
//   7: [0],
//   8: []
// }),5);
/*
p
graph as an adjacency list (nodes: edges to other nodes)
r
number -> how many islands exist in the graph
e
empty graph (return 0), nodes pointing to no other nodes (+1 to count)
p
let count = 0;
let visited = new Set();
for (const node in graph){
if (visited.has(node)) continue;
visited.add(node);
let hasSeenEls = false;
for (const el of graph[node]){
if (visited.has(el)) hasSeenEls = true;
visited.add(el);
count++
}
}
return count;
*/

// console.log(connectedComponentsCount({
//   3: [],
//   4: [6],
//   6: [4, 5, 7, 8],
//   8: [6],
//   7: [6],
//   5: [6],
//   1: [2],
//   2: [1]
// }), 3);


module.exports = {
  connectedComponentsCount,
};
