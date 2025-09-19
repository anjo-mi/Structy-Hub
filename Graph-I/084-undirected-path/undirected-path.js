const undirectedPath = (edges, src, dst) => {
  const graph = {};
  for (const [a,b] of edges) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  const v = new Set();
  const q = [src];
  while (q.length){
    const curr = q.shift();
    if (v.has(curr)) continue;
    v.add(curr);
    if (curr === dst) return true;
    for (const n of graph[curr]) q.push(n);
  }
  return false;
};


/*

*/
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];
console.log(undirectedPath(edges, 'j', 'm'), true);
const edgers = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];
console.log(undirectedPath(edgers, 'k', 'o'), false);

module.exports = {
  undirectedPath,
};
