class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPre = (inn, pre) => {
  if (!inn.length) return null;
  const r = pre.shift();
  const innDex = inn.indexOf(r);
  const leftInn = inn.slice(0,innDex);
  const rightInn = inn.slice(innDex + 1);
  const leftPre = pre.slice(0,leftInn.length);
  const rightPre = pre.slice(leftInn.length);
  const root = new Node(r);
  root.left = buildTreeInPre(leftInn, leftPre);
  root.right = buildTreeInPre(rightInn, rightPre);
  return root;
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
