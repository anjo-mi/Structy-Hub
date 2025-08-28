class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinder = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];
  const path = [root.val];
  const left = pathFinder(root.left,target);
  const right = pathFinder(root.right,target);
  if (left) return path.concat(left);
  if (right) return path.concat(right);
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