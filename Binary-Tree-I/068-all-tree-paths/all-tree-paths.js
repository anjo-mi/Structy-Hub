class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = root => {
  const paths = [];
  if (!root) return paths;
  const s = [{n:root, path:[root.val]}];
  while (s.length){
    const {n,path} = s.pop();
    if (!n.left && !n.right) paths.push(path);
    if (n.right) s.push({n:n.right,path:path.concat(n.right.val)});
    if (n.left) s.push({n:n.left,path:path.concat(n.left.val)});
  }
  return paths;
}

const _allTreePaths = r =>{
  const paths = [];
  if (!r) return paths;
  if (!r.left && !r.right) return [[r.val]];
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
