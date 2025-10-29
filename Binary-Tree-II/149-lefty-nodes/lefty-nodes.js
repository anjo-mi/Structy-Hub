class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const leftyNodes = (root) => {
  const leftNodeVals = [];
  if (!root) return leftNodeVals;
  let q = [root];
  while (q.length){
    leftNodeVals.push(q[0].val);
    const next = [];
    for (const n of q){
      if (n.left) next.push(n.left);
      if (n.right) next.push(n.right);
    }
    q = next;
  }
  return leftNodeVals
};
// make an array empty (leftNodeVals)
// put root in q array
// while q.length;
// push (q[0].val) to leftNodeVals
// make a next [];
// iterate thru q -> push children to next
// q = next

// outside of loop: return leftNodeVals
/*
taking in root of binary trees of nodes (.val + .right &&/|| .left || null)
returning array of values (not nodes)
in the case of empty tree: [];
no children: [root.val];

*/
const u = new Node('u');
const t = new Node('t');
const s = new Node('s');
const r = new Node('r');
const q = new Node('q');
const p = new Node('p');
u.left = t;
u.right = s;
s.right = r;
r.left = q;
r.right = p;

//     u
//  /    \
// t      s
//         \
//         r
//        / \
//        q  p

console.log(leftyNodes(u), [ 'u', 't', 'r', 'q' ]);


module.exports = {
  leftyNodes,
};
