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

/*
add set to params

still operate a breadth first search
  but hit O(n!) time
  because remove the previous element from the set
    (more than one way to reach the same element)

if (src === dst) return 0;
if (set has src) return Infinity [child points back to parent]

*ADD src to set* (disables children from traveling back on 'just' traversed edge)

iterate thru every property of the src's value
  total (value of src[child]) + call of function on [child] as src
    min = lowest total

*REMOVE src from set* (it can be traveled to again now that weve traveled another edge)
return the min
*/

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
