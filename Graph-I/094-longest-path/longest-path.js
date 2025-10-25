const getDists = (node,graph,dists) => {
  if (node in dists) return dists[node];
  if (!graph[node].length) return 0;

  const allDists = graph[node].map(n => getDists(n,graph,dists) + 1);
  return dists[node] = Math.max(...allDists);
}

const longestPath = (graph) => {
  const dists = {};
  for (const node in graph){
    getDists(node,graph,dists);
  }
  return Object.values(dists).reduce((a,el) => el > a ? el : a, -Infinity);
};
/*

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
console.log(longestPath(grap), 25)

module.exports = {
  longestPath,
};
