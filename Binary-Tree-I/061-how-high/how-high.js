class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const howHigh = (root,ht = 0) => {
  if (!root) return -1;
  if (!root.left && !root.right) return ht;
  ht++;
  return Math.max(howHigh(root.left,ht), howHigh(root.right,ht));
};
/*
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
c.right = f;
e.left = g
console.log(howHigh(a),3);
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

module.exports = {
  howHigh,
};
