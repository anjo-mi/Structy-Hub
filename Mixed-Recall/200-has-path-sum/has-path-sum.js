class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const hasPathSum = (root, target,total = 0 ) => {
  if (!root) return false;
  total += root.val;
  if (!root.right && !root.left) return target === total;
  return hasPathSum(root.left,target,total) || hasPathSum(root.right,target,total);
};
const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

console.log(hasPathSum(a, 32), true);

/*
add a parameter for total
if !root return total === target
total += root.val;
check if hasPathSum(root.left / right, target,total);
*/

module.exports = {
  hasPathSum,
};
