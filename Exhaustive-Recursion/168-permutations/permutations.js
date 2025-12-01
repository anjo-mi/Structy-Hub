// const permutations = (arr,res=[],i=0) => {
//   if (!arr.length) return [[]];
//   if (arr.length === 1) return [arr];
//   if (i >= arr.length -1) return res;
//   const copy = arr.slice(0);
//   [copy[i], copy[i+1]] = [copy[i+1], copy[i]];
//   res.push(arr,copy);
//   permutations(arr,res,i+1);
//   permutations(copy,res,i+1);
//   return res;
// };

const permutations = (arr) => {
  if (!arr.length) return [[]];

  const first = arr[0];
  const results = [];
  const recursivePerms = permutations(arr.slice(1));
  for (const perm of recursivePerms){
    for (let i = 0 ; i <= perm.length ; i++){
      results.push(perm.slice(0,i).concat(first).concat(perm.slice(i)));
    }
  }
  return results;
};

/*
if (!arr.length) return [[]];

extract first element
iterate thru remaining elements
  placing element at each point
    push each iteration to result
repeat for slice of one?
*/


console.log(permutations(['a', 'b', 'c']));
console.log(permutations(['red', 'blue']));
console.log(permutations([8, 2, 1, 4]));
console.log(permutations([]));
module.exports = {
  permutations,
};
