class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const leafLayers = (root) => {
  const layers = []
  reverseTraverse(root,layers);
  return layers;
};

const reverseTraverse = (node, layers) => {
  if (!node) return -1;

  const l = reverseTraverse(node.left,layers);
  const r = reverseTraverse(node.right,layers);
  const h = 1 + Math.max(l,r);

  layers[h] = (layers[h] || []).concat([node.val]);

  return h;
}

const q = new Node("q");
const r = new Node("r");
const s = new Node("s");
const t = new Node("t");
const u = new Node("u");
const v = new Node("v");

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//      q
//    /   \
//   r     s
//    \
//     t
//    /
//   u
//  /
// v

console.log(leafLayers(q));
// [
//   ['v', 's'],
//   ['u'],
//   ['t'],
//   ['r'],
//   ['q'],
// ]


module.exports = {
  leafLayers,
};
