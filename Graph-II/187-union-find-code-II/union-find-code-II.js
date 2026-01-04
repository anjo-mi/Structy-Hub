const countComponents = (n, edges) => {
  const arr = Array(n).fill(null).map((el,i) => i);
  const size = Array(n).fill(null).map(el => 1);
  for (let [a,b] of edges){
    while (arr[b] !== b) b = arr[b];
    while (arr[a] !== a) a = arr[a];
    const max = size[Math.max(a,b)];
    const min = a === max ? b : a;
    arr[min] = max;
    size[max] += size[min];
  }
  return arr.reduce((a,el,i) => a += el === i ? 1 : 0, 0);
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
