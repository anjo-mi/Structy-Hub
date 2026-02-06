const countComponents = (n, edges) => {
  const arr = Array(n).fill(null).map((el,i) => i);
  for (let [a,b] of edges){
    while (b !== arr[b]) b = arr[b];
    while (a !== arr[a]) a = arr[a];
    arr[b] = a;
  }
  return arr.reduce((a,el,i) => a += el === i ,0);
};

console.log(countComponents(6, [
  [0, 3],
  [5, 3],
  [4, 2]
]), 3);
module.exports = {
  countComponents,
};
