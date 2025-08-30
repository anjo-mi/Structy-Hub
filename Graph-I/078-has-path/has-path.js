const hasPath = (graph, src, dst) => {
  const q = [src];
  const v = new Set();
  while (q.length){
    const curr = q .shift();
    if (v.has(curr)) continue;
    v.add(curr);
    if (curr === dst) return true;
    for (const node of graph[curr]) if (!v.has(node)) q.push(node);
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
