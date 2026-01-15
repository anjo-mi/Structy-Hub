class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const hasPathSum = (root, target, total = 0) => {
  if (!root) return false;
  total += root.val;
  if (!root.right && !root.left) return total === target;
  return hasPathSum(root.right,target,total) || hasPathSum(root.left,target,total);
};

//  must begin at the root and end at a leaf
/*
add a parameter to the function for total = 0
if theres no root, it must be return false
otherwise
  total += root.val
  if (!root.left && !root.right) [no more vals to add] check if the total === target
  otherwise see if it recursively works for root.left OR root.light
*/
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(hasPathSum(a, 8), true);


module.exports = {
  hasPathSum,
};
