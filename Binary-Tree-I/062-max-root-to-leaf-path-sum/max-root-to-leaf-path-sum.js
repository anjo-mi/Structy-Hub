class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxPathSum = (root) => {
  if (!root) return null;
  const total = root.val;
  if (!root.left && !root.right) return total;

  const left = maxPathSum(root.left);
  const right = maxPathSum(root.right);

  if (!root.left) return total + right;
  if (!root.right) return total + left;

  return total + Math.max(left,right);
};
/*

*/
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;
console.log(maxPathSum(a), -8);
//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2


module.exports = {
  maxPathSum,
};