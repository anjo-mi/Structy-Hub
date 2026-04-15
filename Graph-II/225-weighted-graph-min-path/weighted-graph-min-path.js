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

module.exports = {
  weightedGraphMinPath,
};
