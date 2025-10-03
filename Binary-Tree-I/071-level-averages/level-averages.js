class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelAverages = (root) => {
  const avgs = [];
  if (!root) return avgs;
  let q = [root];
  while (q.length){
    const avg = q.reduce((t,n) => t + n.val,0) / q.length;
    avgs.push(avg);
    const next = [];
    for (const n of q){
      if (n.left) next.push(n.left);
      if (n.right) next.push(n.right);
    }
    q = next;
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
