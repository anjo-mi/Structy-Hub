class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const binarySearchTreeIncludes = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  if (root.val > target) return binarySearchTreeIncludes(root.left,target);
  if (root.val < target) return binarySearchTreeIncludes(root.right,target);
};

const q = new Node(54);
const r = new Node(42);
const s = new Node(70);
const t = new Node(31);
const u = new Node(50);
const v = new Node(72);
const w = new Node(47);
const x = new Node(90);
q.left = r;
q.right = s;
r.left = t;
r.right = u;
s.right = v;
u.left = w;
v.right = x;
//       54
//     /    \
//    42     70
//   / \      \
// 31   50     72
//     /        \
//    47         90
console.log(binarySearchTreeIncludes(q, 47), true);
console.log(binarySearchTreeIncludes(q, 70), true);
console.log(binarySearchTreeIncludes(q, 49), false);
console.log(binarySearchTreeIncludes(q, 55), false);
console.log(binarySearchTreeIncludes(q, 100), false);

module.exports = {
  binarySearchTreeIncludes,
};
