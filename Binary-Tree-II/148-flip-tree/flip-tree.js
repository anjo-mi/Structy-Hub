class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const flipTree = (r) => {
  if (!r) return null;
  const left = flipTree(r.left);
  const right = flipTree(r.right);
  r.left = right;
  r.right = left;
  return r;
};


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
