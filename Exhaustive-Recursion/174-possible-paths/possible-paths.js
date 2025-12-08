const possiblePaths = (graph, src, dst) => {
  const allPaths = [];
  const q = [{ node: src, path: [src] }];

  while (q.length){
    const {node,path} = q.shift();
    // path.push(node);
    if (node === dst){
      allPaths.push(path);
    }
    if (!graph[node].length) continue;
    
    console.log({node,path,dst,allPaths})
    console.log(graph[node])
    for (const n of graph[node]){
      q.push({ node: n , path: [...path,n] });
    }
  }
  return allPaths;
};
const graph = {
  "a": ["b", "c", "d"],
  "b": ["d"],
  "c": ["d"],
  "d": []
};
console.log(possiblePaths(graph, "a", "d")); // ->
// [
//   ["a", "b", "d"],
//   ["a", "c", "d"],
//   ["a", "d"]
// ]

/*
getDists, but make it towards a specific destination, from a specific origin

set src to arr [src]
make a queue of objects with node being initial src, + path
  - if no length of graph[curr] continue the loop
  push curr to path
  if (curr === dst) push path to allPaths
  otherwise push all nodes and their current paths to q

return allPaths?
*/

// const grap = {
//   "a": ["b", "c", "d"],
//   "b": ["d"],
//   "c": ["d"],
//   "d": []
// };
// console.log(possiblePaths(grap, "c", "b")); // ->
// // []

module.exports = {
  possiblePaths,
};
