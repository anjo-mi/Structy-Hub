class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const hasPathSum = (root, target, total = 0) => {
  if (!root) return false;
  total += root.val;
  if (!root.right && !root.left) return total === target;
  return hasPathSum(root.right,target,total) || hasPathSum(root.left,target,total);
};
module.exports = {
  hasPathSum,
};
