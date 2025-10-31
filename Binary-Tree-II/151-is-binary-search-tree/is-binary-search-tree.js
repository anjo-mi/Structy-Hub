class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ibst (12,null,null)
// ibst (5,12,12)

const isBinarySearchTree = (root,low = null,high = null) => {
  if (!root) return true;
  if (high || high === 0) if (root.val > high) return false;
  if (low  || low  === 0) if (root.val < low ) return false;
  
  
  return isBinarySearchTree(root.left,low,root.val) && isBinarySearchTree(root.right,root.val,high);
};
// if !root: true (empty tree doesnt break criteria)
// we should set the parameters to also take a low and a high
// if (low or high are defined)
//   - ensure .val is lower than high and higher than low
//     - if not return false
//     - if so: recurse on the right and left
//     - right will get val as new high
//     - left get val as new low
/*
taking in root of (possibly binary search tree)
  nodes (.val + .left &&/|| .right or null)
returning a Boolean  -> is this actually a BST?

     12
   /   \
  5     18
 / \     \
3   15     19
this will be the main pain point
  - false because 15 > 12, but would pass the immediate check of 15 > 5


*/
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
