class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPre = (inn, pre) => {
  if (!inn.length || !pre.length) return null;
  const root = pre.shift();
  const innDex = inn.indexOf(root);
  const leftInn = inn.slice(0, innDex);
  const rightInn = inn.slice(innDex + 1);
  const leftPre = pre.slice(0,leftInn.length);
  const rightPre = pre.slice(leftInn.length, leftInn.length + rightInn.length);
  const r = new Node(root);
  r.left = buildTreeInPre(leftInn,leftPre);
  r.right = buildTreeInPre(rightInn,rightPre);
  return r;
};

console.log(buildTreeInPre(
  [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
  [ 'a', 'b', 'd', 'e', 'g', 'h', 'c', 'f' ] 
));
//       a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h

module.exports = {
  buildTreeInPre,
};
