class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPost = (inn, post) => {
  if (!post.length || !inn.length) return null;
  const parent = new Node(post.pop());
  const innDex = inn.indexOf(parent.val);
  const leftInn = inn.slice(0,innDex);
  const rightInn = inn.slice(innDex + 1);
  const leftPost = post.slice(0,leftInn.length);
  const rightPost = post.slice(leftInn.length);
  parent.left = buildTreeInPost(leftInn,leftPost);
  parent.right = buildTreeInPost(rightInn,rightPost);
  return parent;
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
