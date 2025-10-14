const hasPath = (graph, src, dst) => {
  const v = new Set();
  const q = [src];
  while (q.length){
    const curr = q.shift();
    if (curr === dst) return true;
    if (v.has(curr)) continue;
    v.add(curr);
    for (const n of graph[curr]) q.push(n);
  }
  return false;
};
/*

*/
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};
console.log(hasPath(graph, 'f', 'j'),false);
const grap = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};
console.log(hasPath(grap, 'v', 'w'), true);
module.exports = {
  hasPath,
};
