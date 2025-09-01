class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = r => {
  const rev = _allTreePaths(r);
  return rev.map(path => path.reverse());
}

const _allTreePaths = r =>{
  const paths = [];
  if (!r) return paths;
  if (!r.right && !r.left) return [[r.val]];
  const left = _allTreePaths(r.left);
  const right = _allTreePaths(r.right);
  for (const p of left){
    p.push(r.val);
    paths.push(p);
  }
  for (const p of right){
    p.push(r.val);
    paths.push(p);
  }
  return paths;
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
