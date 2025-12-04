const permutations = (arr) => {
  if (!arr.length) return [[]];

  const first = arr[0];
  const final = [];
  const perms = permutations(arr.slice(1));
  for (const perm of perms){
    for (let i = 0 ; i <= perm.length ; i++){
      final.push([...perm.slice(0,i), first, ...perm.slice(i)]);
    }
  }
  return final;
};

console.log(permutations(['a', 'b', 'c']));
console.log(permutations(['red', 'blue']));
console.log(permutations([8, 2, 1, 4]));
console.log(permutations([]));
module.exports = {
  permutations,
};
