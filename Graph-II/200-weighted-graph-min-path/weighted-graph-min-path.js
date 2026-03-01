const weightedGraphMinPath = (graph, src, dst, v = new Set()) => {
  if (src === dst) return 0;
  
  if (v.has(src)) return Infinity;
  v.add(src);
  let min = Infinity;
  for (const child in graph[src]){
    const edgeDist = graph[src][child];
    min = Math.min(
      min,
      weightedGraphMinPath(graph,child,dst,v) + edgeDist
    );
  }
  v.delete(src);
  return min;
};

const graph = {
  a: { b: 2, d: 9, c: 5 },
  b: { a: 2, d: 4, e: 6 },
  c: { a: 5, e: 4 },
  d: { a: 9, b: 4, e: 1 },
  e: { b: 6, c: 4, d: 1 },   
};
console.log(weightedGraphMinPath(graph, 'a', 'e'), 7);


module.exports = {
  weightedGraphMinPath,
};
