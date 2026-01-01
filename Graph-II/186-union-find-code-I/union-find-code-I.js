const countComponents = (n, edges) => {
  const arr = Array(n).fill(null).map((el,i) => i);
  for (let [a,b] of edges){
    while (arr[b] !== b) b = arr[b];
    while (arr[a] !== a) a = arr[a];
    arr[b] = a;
    console.log({arr,b})
  }
  console.log({arr})
  return arr.reduce((a,el,i) => a += el === i ? 1 : 0 , 0);
};
console.log(countComponents(6, [
  [0, 3],
  [5, 3],
  [4, 2]
]), 3);
module.exports = {
  countComponents,
};
