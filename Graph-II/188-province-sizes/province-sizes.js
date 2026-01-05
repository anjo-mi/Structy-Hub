const find = (node,roots) => {
  if (node !== roots[node]) node = find(roots[node],roots);
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

const provinceSizes = (n, roads) => {
  const roots = Array(n).fill(null).map((el,i) => i);
  const sizes = Array(n).fill(null).map(_ => 1);
  for (const [a,b] of roads) union(roots,sizes,a,b);
  return roots.reduce((a,el,i) => {
    if (el === i) a.push(sizes[i]);
    return a;
  }, []);
};

console.log(provinceSizes(6, [
  [4, 5],
  [1, 0],
  [2, 3],
  [0, 5],
  [5, 1],
  [4, 0],
]), [4, 2]);
module.exports = {
  provinceSizes,
};
