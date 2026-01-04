class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
 
const pathFinder = (r,val) => {
  if (!r) return null;

  const path = [r.val];
  if (r.val === val) return path;

  const left = pathFinder(r.left, val);
  if (left) return path.concat(left);
  const right = pathFinder(r.right, val);
  if (right) return path.concat(right);

  return null;
}
 
const lowestCommonAncestor = (root, val1, val2) => {
  const p1 = pathFinder(root,val1);
  const p2 = pathFinder(root,val2);
  let lowest = p1[0] || null;
  for (let i = 0 ; i < Math.min((p1.length || 0),(p2.length || 0)) ; i++){
    if (p1[i] === p2[i]) lowest = p1[i];
    else break;
  }
  return lowest;
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










