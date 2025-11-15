class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const checkBalance = (r) => {
  if (!r) return 0;

  const left = checkBalance(r.left);
  const right = checkBalance(r.right);

  if (right < 0 || left < 0) return -1;

  if (Math.abs(right-left) > 1) return -1;

  return 1 + Math.max(right,left);
}

const isTreeBalanced = (r) => {
  return checkBalance(r) > -1;
};

const s = new Node("s");
const t = new Node("t");
const u = new Node("u");
const v = new Node("v");
const x = new Node("x");
const y = new Node("y");
s.left = t;
s.right = u;
t.left = v;
u.right = x;
v.left = y;
console.log(isTreeBalanced(s), false);
//        s
//      /   \
//     t     u
//    /      \
//   v        x
//  /
// y
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
console.log(isTreeBalanced(a), true);
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g



module.exports = {
  isTreeBalanced,
};
