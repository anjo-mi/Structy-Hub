const find = (node, roots) => {
  while (node !== roots[node]) node = find(roots[node],roots);
  return node;
}

const union = (a,b,roots,sizes) => {
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
  const sizes = Array(n).fill(null).map(() => 1);
  for (const [a,b] of edges){
    union(a,b,roots,sizes);
  }
  return roots.reduce((a,el,i) => a += el === i ? 1 : 0 , 0);
};



console.log(countComponents(10, [
  [3, 2],
  [5, 4],
  [4, 3],
  [2, 1],
  [0, 1],
  [8, 9],
  [5, 6],
  [7, 8]
]), 2);


module.exports = {
  countComponents,
};
