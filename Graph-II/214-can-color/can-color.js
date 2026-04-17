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

module.exports = {
  canColor,
};
