const canColor = (graph) => {
  const colored = {};
  for (const node in graph){
    let color = true;
    if (node in colored) color = colored[node];
    const q = [{node, color}];
    while (q.length){
      const {node,color} = q.shift();
      if (node in colored && colored[node] !== color) return false;
      else if (node in colored) continue;
      colored[node] = color;
      for (const n of graph[node]) {
        q.push({node:n, color: !color});
      }
    }
  }
  return true;
};

console.log(canColor({
  x: ["y"],
  y: ["x","z"],
  z: ["y"]
}), true);

console.log(canColor({
  q: ["r", "s"],
  r: ["q", "s"],
  s: ["r", "q"]
}), false);

console.log(canColor({
  "a": ["b", "d"], 
  "c": ["b", "f"], 
  "b": ["a", "c"], 
  "d": ["a", "e"], 
  "e": ["d", "f"], 
  "f": ["e", "c"]
}), true);

module.exports = {
  canColor,
};
