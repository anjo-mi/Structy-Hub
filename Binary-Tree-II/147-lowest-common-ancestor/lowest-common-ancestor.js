class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinder = (r, v) => {
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
  let deepest = null;
  const p1 = pathFinder(root,val1);
  const p2 = pathFinder(root,val2);
  while (p1.length && p2.length){
    const [a,b] = [p1.shift() , p2.shift()];
    if (a === b) deepest = a;
    else return deepest;
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










