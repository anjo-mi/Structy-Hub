class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const postOrder = (r, stack = []) => {
  if (!r) return [];
  if (r.left) postOrder(r.left,stack);
  if (r.right) postOrder(r.right,stack);
  stack.push(r.val);
  return stack;
};
/*
root of binary tree of nodes (.val + .right || null, .left || null)
will return an [] of all values
  - in order: left, right, parent

DFS: create stack as parameter
if (root.left) call postOrder on root.left (w stack param)
if (root.right) call postOrder on root.right (w stack param)
stack.push(root.val) return stack;
return stack


*/

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g
console.log(postOrder(a), ['d', 'e', 'b', 'f', 'g', 'c', 'a']);
module.exports = {
  postOrder,
};
