const subsets = (elms) => {
  if (!elms.length) return [[]];
  const first = elms[0];
  const remainsWithout = subsets(elms.slice(1));
  const remainsWith = remainsWithout.map(sub => [first,...sub]);
  return [...remainsWith, ...remainsWithout];
};


console.log(subsets([]), [[]]);
console.log(subsets(['x']),
[ 
  [], 
  [ 'x' ] 
]);

console.log(subsets(['q', 'r', 's', 't']),
  [
  [],
  [ 't' ],
  [ 's' ],
  [ 's', 't' ],
  [ 'r' ],
  [ 'r', 't' ],
  [ 'r', 's' ],
  [ 'r', 's', 't' ],
  [ 'q' ],
  [ 'q', 't' ],
  [ 'q', 's' ],
  [ 'q', 's', 't' ],
  [ 'q', 'r' ],
  [ 'q', 'r', 't' ],
  [ 'q', 'r', 's' ],
  [ 'q', 'r', 's', 't' ]
]);

module.exports = {
  subsets,
};