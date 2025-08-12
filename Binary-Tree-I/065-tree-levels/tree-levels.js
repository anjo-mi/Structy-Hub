class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeLevels = (root) => {
  const levels = [];
  if (!root) return levels;
  let stack = [root];
  while (stack.length){
    const level = stack.map(el => el.val);
    levels.push(level);
    const next = [];
    for (const n of stack){
      if (n.left) next.push(n.left);
      if (n.right) next.push(n.right);
    }
    stack = next;
  }
  return levels;
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
