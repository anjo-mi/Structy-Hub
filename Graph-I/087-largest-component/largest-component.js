const largestComponent = (graph) => {
  const islands = [];
  for (const node in graph){
    if (islands.some(isle => isle.has(node))) continue;
    const q = [node];
    const isle = new Set();
    while (q.length){
      const curr = q.shift();
      if (isle.has(curr)) continue;
      isle.add(curr);
      for (const n of graph[curr]) q.push(n);
    }
    islands.push(isle);
  }
  return islands.length
          ? Math.max(...islands.map(isle => isle.size))
          : 0;
};

console.log(largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
}), 6);
console.log(largestComponent({}), 0);
console.log(largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}),4);
/*
p
adjacency list representing graph
r
Number -> largest connected component in the graph
e
empty graph (return 0), one big component (return size of whole graph)
p
let largest = 0;
loop thru graph nodes
for (const node of graph){
  const stack = [node];
  const set = new Set();
  while (stack.length){
    const curr = stack.pop();
    if (set.has(curr)) continue;
    set.add(curr);
    for (const n of graph[node]){
      if (set.has(n)) continue;
      stack.push(n);
    }
  }
  if (set.size > largest) largest = set.size;
}
return largest;
*/
// console.log(largestComponent({
//   0: ['8', '1', '5'],
//   1: ['0'],
//   5: ['0', '8'],
//   8: ['0', '5'],
//   2: ['3', '4'],
//   3: ['2', '4'],
//   4: ['3', '2']
// }),4);

module.exports = {
  largestComponent,
};
