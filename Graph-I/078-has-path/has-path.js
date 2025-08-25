const hasPath = (graph, src, dst) => {
  const v = new Set();
  const stack = [src];
  while (stack.length){
    const curr = stack.pop();
    if (curr === dst) return true;
    if (v.has(curr)) continue;
    v.add(curr);
    for (const node of graph[curr]) if (!v.has(node)) stack.push(node);
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
