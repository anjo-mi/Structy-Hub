const permutations = (arr) => {
  if (!arr.length) return [[]];
  const perms = [];
  const first = arr[0];
  const remains = permutations(arr.slice(1));
  for (const perm of remains){
    for (let i = 0 ; i<= perm.length ; i++){
      perms.push([...perm.slice(0,i), first,...perm.slice(i)]);
    }
  }
  return perms;  
};

console.log(permutations(['a', 'b', 'c']));
console.log(permutations(['red', 'blue']));
console.log(permutations([8, 2, 1, 4]));
console.log(permutations([]));
module.exports = {
  permutations,
};
