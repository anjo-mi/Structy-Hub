const canColor = (graph) => {
  const seen = {};
  let color = true;
  for (const node in graph){
    if (node in seen) continue;
    const q = [{node, color}]
    while (q.length){
      const {node, color} = q.shift();
      if (node in seen) continue;
      seen[node] = color;
      for (const n of graph[node]){

        if (n in seen && seen[n] === color) return false;
        if (n in seen) continue;
        q.push({node:n, color: color ? false : true})
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
