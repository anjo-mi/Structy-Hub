class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinder = (r, t) => {
  if (!r) return null;
  const p = [r.val];
  if (r.val === t) return p;

  const left = pathFinder(r.left,t);
  const right = pathFinder(r.right,t);

  if (left) return p.concat(left);
  if (right) return p.concat(right);

  return null;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(pathFinder(a, 'e'),['a','b','e']);
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
module.exports = {
  pathFinder,
};
/*

*/