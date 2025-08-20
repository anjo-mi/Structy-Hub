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
  const stack = [root];
  while (stack.length){
    const curr = stack.pop();
    if (!curr.right && !curr.left) leaves.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return leaves;
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
