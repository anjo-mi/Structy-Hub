class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeLevels = (root) => {
  const ls = [];
  if (!root) return ls;
  let q = [root];
  while (q.length){
    const l = q.map(n => n.val);
    ls.push(l);
    const next = [];
    for (const n of q){
      if (n.left) next.push(n.left);
      if (n.right) next.push(n.right);
    }
    q = next;
  }
  return ls;
};
/*

*/
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;
console.log(treeLevels(a),
[
  ['a'],
  ['b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i']
])
//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i



module.exports = {
  treeLevels,
};
