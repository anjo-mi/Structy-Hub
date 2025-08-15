const hasPath = (graph, src, dst) => {
  const v = new Set();
  const stack = [src];
  while (stack.length){
    const curr = stack.pop();
    if (v.has(curr)) continue;
    v.add(curr);
    if (curr === dst) return true;
    for (const n of graph[curr]) if (!v.has(n)) stack.push(n);
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
