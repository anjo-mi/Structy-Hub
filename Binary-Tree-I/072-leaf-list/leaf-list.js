class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const leafList = (root) => {
  const leaves = [];
  if (!root) return leaves;
  const s = [root];
  while (s.length){
    const c = s.pop()
    if (!c.right && !c.left) leaves.push(c.val)
    if (c.right) s.push(c.right)
    if (c.left) s.push(c.left)
  }
  return leaves
};
/*

*/
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;
console.log(leafList(a), [ 'd', 'g', 'h' ])
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h


module.exports = {
  leafList,
};
