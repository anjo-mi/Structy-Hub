class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPost = (inn, post) => {
  if (!inn.length) return null;
  const r = post.pop();
  const innDex = inn.indexOf(r);
  const leftInn = inn.slice(0,innDex);
  const rightInn = inn.slice(innDex + 1);
  const leftPost = post.slice(0,leftInn.length);
  const rightPost = post.slice(leftInn.length);
  const root = new Node(r);
  root.left = buildTreeInPost(leftInn,leftPost);
  root.right = buildTreeInPost(rightInn,rightPost);
  return root;
};
console.log(buildTreeInPost(
  [ 'd', 'b', 'e', 'a', 'f', 'c', 'g' ],
  [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ] 
));
//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g

module.exports = {
  buildTreeInPost,
};
