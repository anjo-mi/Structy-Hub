const possiblePaths = (graph, src, dst) => {
  const allPaths = [];
  const q = [{ node: src, path: [src] }];

  while (q.length){
    const {node,path} = q.shift();

    if (node === dst){
      allPaths.push(path);
    }
    if (!graph[node].length) continue;

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
