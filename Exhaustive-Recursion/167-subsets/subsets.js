const subsets = (elms) => {
  if (!elms.length) return [[]];
  const init = elms[0];
  const wo = subsets(elms.slice(1));
  const w = wo.map(sub => [init,...sub]);
  return [...w,...wo];
};
/*

test_03
  if elms doesnt have a length return [[]]
    - this handles the 'last' case

since we know if it gets this far, there is an element, extract the first element
get all values of remaining elements (elms.slice(1)) from subset call;
BASE CASE:  - this goes all the way to the end until it returns [[]];
concat those to the first element
  - thinking thru this, at each element, were still including the first element?
      - will it matter since were calling the same function on the same array minus the element?
        hcaswdtkdtktlfo

*/
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