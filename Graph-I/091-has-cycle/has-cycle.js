const hasCycle = (graph) => {
  for (const node in graph){
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
  }
  return false;
};
/*
for (const node in graph){
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
  }
  return false;
*/

// after looping thru all nodes, if true hasnt been returned, return false
/*
p
graph -> as an object  / adjacency list (array of strings props and values)
r
boolean, do any of the node in the graph form a cycle
e
no empty values in graph -> auto true but maybe not efficient
p

*/
console.log(hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["a"],
}), true);
console.log(hasCycle({
  a: ["b", "c"],
  b: ["c"],
  c: ["d"],
  d: [],
}),false);
console.log(hasCycle({
  q: ["r", "s"],
  r: ["t", "u"],
  s: [],
  t: [],
  u: [],
  v: ["w"],
  w: [],
  x: ["w"],
}),false);

module.exports = {
  hasCycle,
};
