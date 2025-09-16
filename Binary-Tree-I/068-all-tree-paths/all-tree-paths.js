class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = r => {
  const paths = [];
  if (!r) return paths;
  const s = [ {n:r, path:[r.val]} ];
  while (s.length){
    const {n,path} = s.pop();
    if (!n.left && !n.right) paths.push(path);

    if (n.right) s.push({n:n.right, path: [...path,n.right.val]});
    if (n.left) s.push({n:n.left, path: [...path,n.left.val]});
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
