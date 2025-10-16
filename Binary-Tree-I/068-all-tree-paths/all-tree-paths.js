class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = r => {
  const paths = []
  if (!r) return paths;
  const s = [{r,path:[r.val]}];
  while (s.length){
    const {r,path} = s.pop();
    if (!r.left && !r.right) paths.push(path);
    if (r.right) s.push({r:r.right,path:path.concat([r.right.val])});
    if (r.left) s.push({r:r.left,path:path.concat([r.left.val])});
  }
  return paths;
}

const _allTreePaths = r =>{
  // do the other way ^^^^^ only next time
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
