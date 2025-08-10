class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelAverages = (root) => {
  if (!root) return [];
  const avgs = [];
  let stack = [root];
  while (stack.length){
    const avg = stack.reduce((a,el) => a +=  el.val, 0) / stack.length;
    avgs.push(avg);
    const next = [];
    for (const n of stack){
      if (n.left) next.push(n.left);
      if (n.right) next.push(n.right);
    }
    stack = next;
  }
  return avgs;
};
/*

*/
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
console.log(levelAverages(a), [ 5, 32.5, 17.5, 2 ] );
//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3


module.exports = {
  levelAverages,
};
