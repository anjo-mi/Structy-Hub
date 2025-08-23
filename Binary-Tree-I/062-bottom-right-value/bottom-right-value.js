class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const bottomRightValue = (root) => {
  if (!root) return null;
  const q = [root];
  let c = null;
  while (q.length){
    const curr = q.shift();
    c = curr.val;
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }
  return c;
};
/*

*/
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(6);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
console.log(bottomRightValue(a),6);
//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     / \       
//    -2  6
module.exports = {
  bottomRightValue,
};
