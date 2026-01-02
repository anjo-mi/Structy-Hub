const countComponents = (n, edges) => {
  const arr = Array(n).fill(null).map((el,i) => i);
  const size = Array(n).fill(null).map(el => 1);
  for (let [a,b] of edges){
    while (arr[b] !== b) b = arr[b];
    while (arr[a] !== a) a = arr[a];
    if (a === b) continue;
    const max = size[Math.max(a,b)];
    const min = a === max ? b : a;
    arr[min] = max;
    size[max] += size[min];
  }
  return arr.reduce((a,el,i) => a += el === i ? 1 : 0, 0);
};

// const find = (roots, node) => {
//   if (roots[node] === node) {
//     return node;
//   }

//   const found = find(roots, roots[node]);
//   roots[node] = found;
//   return found;
// };

// const union = (roots, sizes, nodeA, nodeB) => {
//   const rootA = find(roots, nodeA);
//   const rootB = find(roots, nodeB);

//   if (rootA === rootB) {
//     return;
//   }

//   if (sizes[rootA] >= sizes[rootB]) {
//     roots[rootB] = rootA;
//     sizes[rootA] += sizes[rootB];
//   } else {
//     roots[rootA] = rootB;
//     sizes[rootB] += sizes[rootA];
//   }
// };

// const countComponents = (n, edges) => {
//   const roots = [];
//   const sizes = [];

//   for (let i = 0; i < n; i += 1) {
//     roots.push(i);
//     sizes.push(1);
//   }

//   for (let edge of edges) {
//     const [a, b] = edge;
//     union(roots, sizes, a, b);
//   }
  
//   let count = 0;
//   for (let i = 0; i < n; i += 1) {
//     if (i === roots[i]) {
//       count += 1;
//     }
//   }
//   console.log({roots,sizes})
//   return count;
// };

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
