class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeSum = (root) => {
  let total = 0;
  if (!root) return total;
  const s = [root];
  while (s.length){
    const c = s.pop();
    total += c.val;
    if (c.right) s.push(c.right);
    if (c.left) s.push(c.left);
  }
  return total;
};

/*

*/
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(treeSum(a),21);
module.exports = {
  treeSum,
};
/*

*/