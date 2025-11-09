class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const postOrder = (r, vals = []) => {
  if (!r) return vals;
  postOrder(r.left,vals);
  postOrder(r.right,vals);
  vals.push(r.val);
  return vals;
};


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
