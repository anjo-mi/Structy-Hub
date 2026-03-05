const find = (node,roots) => {
  if (node === roots[node]) return node;
  const found = find(roots[node], roots);
  roots[node] = found;
  return found;
}

const union = (a,b,roots,sizes) => {
  const ra = find(a,roots);
  const rb = find(b,roots);
  if (ra === rb) return false;
  if (sizes[ra] >= sizes[rb]){
    roots[rb] = ra;
    sizes[ra] += sizes[rb];
  }else{
    roots[ra] = rb;
    sizes[rb] += sizes[ra];
  }
  return true;
}

const extraCable = (comps, cables) => {
  const roots = Array(comps).fill(null).map((el,i) => i);
  const sizes = Array(comps).fill(null).map(() => 1);
  for (const [a,b] of cables){
    console.log({a,b,roots,sizes});
    if (!union(a,b,roots,sizes)) return [a,b];
  }
  return true;
};

console.log(extraCable(6, [
  [0, 4],
  [4, 5],
  [3, 4],
  [5, 1],
  [1, 3],
  [2, 4],
]), [4, 3]);



module.exports = {
  extraCable,
};
