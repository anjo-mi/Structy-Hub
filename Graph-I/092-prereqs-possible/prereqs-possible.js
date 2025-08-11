const hasCycle = (node,graph) => {
  const v = new Set();
  const stack = [node];
  while (stack.length){
    const curr = stack.shift();
    v.add(curr);
    for (const n of graph[curr]){
      if (v.has(n)) return true;
      stack.push(n);
    }
  }
  return false;
};

const prereqsPossible = (numCourses, prereqs) => {
  const graph = {};
  for (const [a,b] of prereqs){
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[b].push(a);
  }
  for (const cls in graph){
    if (hasCycle(cls, graph)) return false;
  }
  return true;
};
/*

*/

const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0],
];
console.log(prereqsPossible(numCourses, prereqs), false);

module.exports = {
  prereqsPossible,
};
