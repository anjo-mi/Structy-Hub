class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const isBinarySearchTree = (root,h,l) => {
  if (!root) return true;
  if (h || h === 0) if (root.val > h) return false;
  if (l || l === 0) if (root.val < l) return false;
  return isBinarySearchTree(root.left,root.val,l) && isBinarySearchTree(root.right,h,root.val);
};

const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(15);
const f = new Node(19);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
//      12
//    /   \
//   5     18
//  / \     \
// 3   15     19
console.log(isBinarySearchTree(a), false);

module.exports = {
  isBinarySearchTree,
};
