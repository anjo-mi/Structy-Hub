class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = r => {
  if (!r) return null;
  const paths = [];
  const s = [{node: r, path: [r.val]}];
  while (s.length){
    const {node, path} = s.pop();
    if (!node.left && !node.right) paths.push(path);
    if (node.right) s.push({
      node: node.right,
      path: [...path, node.right.val]
    })
    if (node.left) s.push({
      node: node.left,
      path: [...path, node.left.val]
    })
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
