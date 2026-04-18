class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const flattenTree = (root) => {
  if (!root) return null;
  if (!root.left && !root.right) return root;

  const left = flattenTree(root.left);
  const right = flattenTree(root.right);

  if (left){
    root.right = left;
    root.left = null;

    let tail = left;
    while(tail.right) tail = tail.right;
    tail.right = right;
  }
  return root;
};

module.exports = {
  flattenTree,
};
