class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = r => {
  if (!r) return [];
  const paths = [];
  const queue = [{node: r, path: [r.val]}];
  while (queue.length){
    const {node, path} = queue.shift();
    if (!node.right && !node.left) paths.push(path);
    if (node.left) queue.push({
      node: node.left,
      path: [...path, node.left.val]
    });
    if (node.right) queue.push({
      node: node.right,
      path: [...path, node.right.val]
    });
  }
  return paths;
}

const _allTreePaths = r =>{
  
}



/*

*/
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(allTreePaths(a),  [ 
   [ 'a', 'b', 'd' ], 
   [ 'a', 'b', 'e' ], 
   [ 'a', 'c', 'f' ] 
 ]  );
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

module.exports = {
  allTreePaths,
};
