class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const getMaxHeights = (r,d = 0) => {
  if (!r) return d-1;
  if (!r.right && !r.left) return d;
  const left = getMaxHeights(r.left,d+1);
  const right = getMaxHeights(r.right,d+1);
  return Math.max(left,right);
}

const isTreeBalanced = (r) => {
  if (!r) return true;

  const s = [[r,0]];
  while (s.length){
    const [c,d] = s.pop();
    const left = c ? getMaxHeights(c.left,d+1) : d;
    const right = c ? getMaxHeights(c.right, d+1) : d;
    // console.log({c,left,right})
    if (Math.abs(left - right) > 1) return false;
    if (c && c.right) s.push([c.right,d+1]);
    else if (c && !c.right) s.push([c.right,d]);
    if (c && c.left) s.push([c.left,d+1]);
    else if (c && !c.left) s.push([c.left,d]);
  }
  return true;
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
