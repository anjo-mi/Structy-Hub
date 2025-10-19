const hasPath = (graph, src, dst) => {
  const v = new Set();
  const q = [src];
  while (q.length){
    const c = q.shift();
    if (c === dst) return true;
    if (v.has(c)) continue;
    v.add(c);
    for (const n of graph[c]) q.push(n);
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
