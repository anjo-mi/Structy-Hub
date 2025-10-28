class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const flipTree = (r) => {
  if (!r) return null;
  if (!r.left && !r.right) return r;
  const left = flipTree(r.left);
  const right = flipTree(r.right);
  r.left = right;
  r.right = left;
  return r;
};
// repeatedly climb down tree
// recursive call here?  - const left = root.left, const right = root.right
// base case would be no left and no right, return just the val
// otherwise set a variable for each branch, reset the branches value to the other
/*
taking in a root of a binary tree of nodes (.val, .right / .left || null)
return the same tree, all branches are reversed
  - .left = .right
empty tree / siigle level? just return null
two level: root-right = root-left and vice versa


*/

const l = new Node("l");
const m = new Node("m");
const n = new Node("n");
const o = new Node("o");
const p = new Node("p");
const q = new Node("q");
const r = new Node("r");
const s = new Node("s");
const t = new Node("t");
l.left = m;
l.right = n;
n.left = o;
n.right = p;
o.left = q;
o.right = r;
p.left = s;
p.right = t;
console.log(flipTree(l));
//        l
//     /     \
//    m       n
//         /    \
//         o     p
//        / \   / \
//       q   r s   t
//  vvvvvvvvvvvvvvvvvvvvv
//             l
//         /      \
//        n        m
//      /  \
//    p     o
//  / \    / \
// t   s  r   q

module.exports = {
  flipTree,
};
