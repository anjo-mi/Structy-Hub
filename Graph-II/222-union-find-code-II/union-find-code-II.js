const find = (node,roots) => {
  while (roots[node] !== node) node = find(roots[node],roots);
  return node;
}

const union = (roots,sizes,a,b) => {
  const ra = find(a,roots);
  const rb = find(b,roots);
  if (ra === rb) return;
  if (ra > rb){
    roots[rb] = ra;
    sizes[ra] += sizes[rb];
  }else{
    roots[ra] = rb;
    sizes[rb] += sizes[ra];
  }
}

const countComponents = (n, edges) => {
  const roots = Array(n).fill(null).map((el,i) => i);
  const sizes = Array(n).fill(null).map(el => 1);
  for (const [a,b] of edges){
    union(roots,sizes,a,b);
  }
  return roots.reduce((a,el,i) => a += el === i ? 1 : 0 , 0);
};

module.exports = {
  countComponents,
};
