class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPost = (inn, post) => {
  if (!inn.length || !post.length) return null;
  const r = post.pop();
  const innDex = inn.indexOf(r);
  const leftChildNodes = inn.slice(0,innDex);
  const rightChildNodes = inn.slice(innDex + 1);
  const leftPost = post.splice(0, leftChildNodes.length);
  const rightPost = post.splice(0, rightChildNodes.length);
  const root = new Node(r);
  root.left = buildTreeInPost(leftChildNodes,leftPost);
  root.right = buildTreeInPost(rightChildNodes,rightPost);
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

/*
two arrays representing a tree
  - in order: left, parent, right
  - post order: left, right, parent

if the parent is always preceded by its children
  - last post order element needs to be the root
    - pop set to root
    - split the inn order where popped value is
      - slice post order in Math.floor(length / 2)
  - find in innOrder
    - everything to the left is that parent's left children
    - everything to the right is that parent's right children
    - take left child nodes, run same function
    - repeat for right
    - root. left/right = above
*/
module.exports = {
  buildTreeInPost,
};
