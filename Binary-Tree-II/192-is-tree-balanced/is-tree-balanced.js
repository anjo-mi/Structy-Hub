class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const checkBalance = (r) => {
  if (!r) return 0;

  const left = checkBalance(r.left);
  const right = checkBalance(r.right);
  if (left < 0 || right < 0 || Math.abs(left - right) > 1) return -1;

  return Math.max(left,right) + 1;
}

const isTreeBalanced = (r) => {
  return checkBalance(r) >= 0;
};


module.exports = {
  isTreeBalanced,
};
