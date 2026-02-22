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
    while (tail.right) tail = tail.right;
    tail.right = right;
  }
  return root;
};


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(flattenTree(a)) // ->
//      a
//       \
//        b
//         \
//          d
//           \
//            e
//            \
//             c
//              \
//               f

module.exports = {
  flattenTree,
};
