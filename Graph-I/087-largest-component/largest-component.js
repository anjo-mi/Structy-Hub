const largestComponent = (graph) => {
  const comps = [];
  for (const node in graph){
    if (comps.some(comp => comp.has(node))) continue;
    const comp = new Set();
    const q = [node];
    while (q.length){
      const curr = q.shift();
      if (comp.has(curr)) continue;
      comp.add(curr);
      for (const n of graph[curr]) q.push(n);
    }
    comps.push(comp);
  }
  return comps.length ? Math.max(...comps.map(c => c.size)) : 0;
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
