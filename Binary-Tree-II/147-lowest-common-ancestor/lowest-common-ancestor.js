class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinder = (r,v) =>{
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
  let deepest = null;
  if (!pathToOne || !pathToTwo) return deepest;
  for (let i = 0 ; i < Math.min(pathToOne.length,pathToTwo.length) ; i++){
    if (pathToOne[i] === pathToTwo[i]) deepest = pathToOne[i];
  }
  return deepest;
};

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


module.exports = {
  lowestCommonAncestor,
};










