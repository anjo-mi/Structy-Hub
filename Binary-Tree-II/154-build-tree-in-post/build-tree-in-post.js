class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPost = (inn, post) => {
  if (!inn.length) return null;
  const root = post.pop();
  const innDex = inn.indexOf(root);
  const leftInn = inn.slice(0,innDex);
  const rightInn = inn.slice(innDex + 1);
  const leftPost = post.slice(0,leftInn.length);
  const rightPost = post.slice(leftInn.length);
  const r = new Node(root);
  r.left = buildTreeInPost(leftInn,leftPost);
  r.right = buildTreeInPost(rightInn,rightPost);
  return r;
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
