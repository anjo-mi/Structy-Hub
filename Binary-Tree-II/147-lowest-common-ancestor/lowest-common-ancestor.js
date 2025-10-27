class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinder = (r,v) => {
  if (!r) return null;
  const path = [r.val];
  if (r.val === v) return path;
  const left = pathFinder(r.left,v);
  const right = pathFinder(r.right,v);

  if (left) return path.concat(left);
  if (right) return path.concat(right);

  return null;
}

const lowestCommonAncestor = (root, val1, val2) => {
  const pathToOne = pathFinder(root,val1);
  const pathToTwo = pathFinder(root,val2);

  let i = 0;
  while (pathToOne[i] === pathToTwo[i]) i++;
  return pathToOne[i-1];
};
// find the path to each given node (pathFinder function)
// ^^ make the above return an array
// while arr1[i] === arr2[i] i++, return arr[i-1];
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
console.log(lowestCommonAncestor(a, 'g', 'c'), 'a');
console.log(lowestCommonAncestor(a, 'f', 'c'), 'c');
//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

/*
root of a binary tree, plus two values
  - tests show both values always being in tree
    - is there error handling for one / both value(s) not be included

the goal is to return the last value BOTH received:values traverse in order to get to their place in the tree (this includes if the value itself is passed by another)


ISSUES:
duplicate values in trees,
0 - 1 of the given values are present in tree
*/
module.exports = {
  lowestCommonAncestor,
};










