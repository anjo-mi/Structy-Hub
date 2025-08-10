const shortestPath = (edges, na, nb) => {
  const graph = {};
  for (const [a,b] of edges){
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  const v = new Set();
  const queue = [{n: na, dist: 0}];
  while (queue.length){
    const {n, dist} = queue.shift();
    if (v.has(n)) continue;
    v.add(n);
    if (n === nb) return dist;
    for (const node of graph[n]) if (!v.has(node)) queue.push({
      n: node,
      dist: dist + 1
    })
  }
  return -1;
};

let edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];
console.log(shortestPath(edges, 'y', 'x'), 1);
edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];
console.log(shortestPath(edges, 'w', 'z'), 2)
edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];
console.log(shortestPath(edges, 'a', 'e'),3);
edges = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];
console.log(shortestPath(edges, 'w', 'e'),1);

/*
p
2d array of edges (each an array of 2), + two node values
r
Number -> shortest distance to traverse from nodeA to nodeB
e
no path (return -1)
p
create a graph using the nodes
const graph = {};
for (const [a,b] of edges){
  if (!graph[a]) graph[a] = [];
  if (!graph[b]) graph[b] = [];
  graph[a].push(b);
  graph[b].push(a);
}
const stack = [{ node: na, distance:0 }];
const distances =  [];
const vis = new Set();
while (stack.length){
  const curr = stack.pop();
  const currNode = curr.node;
  if (vis.has(currNode)) continue;
  vis.add(currNode);
  const currDist = curr.distance;
  if (currNode === nb) distances(currDistance);
  for (const node of graph[currNode]){
    if (!vis.has(node)) stack.push({ node, distance: currDistance + 1 });
  }
}
return Math.min(...distances);
*/
module.exports = {
  shortestPath,
};
