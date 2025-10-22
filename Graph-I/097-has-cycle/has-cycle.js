const hasCycle = (graph) => {
  for (const node in graph){
    const v = new Set();
    const q = [node];
    while(q.length){
      const c = q.shift();
      v.add(c);
      for (const n of graph[c]){
        if (v.has(n)) return true;
        q.push(n);
      }
    }
  }
  return false;
};



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
