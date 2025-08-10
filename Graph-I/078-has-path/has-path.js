const hasPath = (graph, src, dst) => {
  const stack = [src];
  const v = new Set();
  while (stack.length){
    const curr = stack.pop();
    if (curr === dst) return true;
    if (v.has(curr)) continue;
    v.add(curr);
    for (const n of graph[curr]){
      if (!v.has(n)) stack.push(n);
    }
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
