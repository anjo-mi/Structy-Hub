class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const postOrder = (r, arr = []) => {
  if (!r) return arr;
  postOrder(r.left,arr);
  postOrder(r.right,arr);
  arr.push(r.val);
  return arr;
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
