const largestComponent = (graph) => {
  let l = 0;
  const v = new Set();
  for (const node in graph){
    if (v.has(node)) continue;
    v.add(node);
    const isle = new Set();
    const stack = [node];
    while (stack.length){
      const curr = stack.pop();
      if (isle.has(curr)) continue;
      isle.add(curr);
      for (const n of graph[curr]){
        if (!isle.has(n)) stack.push(n);
      }
    }
    if (isle.size > l) l = isle.size;
  }
  return l;
};
console.log(largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
}), 6);
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
