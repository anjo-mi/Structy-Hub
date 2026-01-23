const hasCycle = (graph) => {
  const sets = [];
  for (const node in graph){
    if (sets.some(set => set.has(node))) continue;
    const set = new Set();
    const q = [node];
    while (q.length){
      const c = q.shift();
      set.add(c);
      for (const n of graph[c]){
        if (set.has(n)) return true;
        q.push(n);
      }
    }
    sets.push(set);
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
