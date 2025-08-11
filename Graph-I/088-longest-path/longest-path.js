const getDists = (node,graph,dists) => {
  if (node in dists) return dists[node];
  if (!graph[node].length) dists[node] = 0;
  else{
    const ds = graph[node].map(n => getDists(n,graph,dists));
    dists[node] = Math.max(...ds) + 1;
  }
  return dists[node];
}

const longestPath = (graph) => {
  const dists = {};
  for (const node in graph){
    getDists(node,graph,dists);
  }
  return Math.max(...Object.values(dists));
};
/*
create an object to store graph properties and their distance from the end
loop thru the node in the graph

** MAKE A SEPARATE FUNCTION THAT CALLS ITSELF
if (theres not a length for graph of current node) distance[current] = 0;
forEach element of the node's property value:
call this function on it
const max = valuesArray.max
distances[currNode] = max + 1

loop thru the distances to find the maximum value?


p
graph, directed, no cycles -> adjacency list (object, values [other properties])
r
Number -> longest path to get from any one node to any other node
e
empty graph (return null or 0),
many or very long paths (keep it efficient),
equal longest paths (return either's length)
p
create an object to store graph properties and their distance from the end
loop thru the node in the graph

** MAKE A SEPARATE FUNCTION THAT CALLS ITSELF
if (theres not a length for graph of current node) distance[current] = 0;
forEach element of the node's property value:
call this function on it
const max = valuesArray.max
distances[currNode] = max + 1

loop thru the distances to find the maximum value?
*/
const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: [],
  q: ['r'],
  r: ['s', 'u', 't'],
  s: ['t'],
  t: ['u'],
  u: []
};
console.log(longestPath(graph), 4);
const grap = {
  a: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  b: ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  c: ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  d: ['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  e: ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  f: ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  g: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  h: ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  i: ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  j: ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
  k: ['l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
  l: ['m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  m: ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
  n: ['o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  o: ['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
  p: ['q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  q: ['r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  r: ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  s: ['t', 'u', 'v', 'w', 'x', 'y', 'z'],
  t: ['u', 'v', 'w', 'x', 'y', 'z'],
  u: ['v', 'w', 'x', 'y', 'z'],
  v: ['w', 'x', 'y', 'z'],
  w: ['x', 'y', 'z'],
  x: ['y', 'z'],
  y: ['z'],
  z: []
};
// console.log(longestPath(grap), 25)

module.exports = {
  longestPath,
};
