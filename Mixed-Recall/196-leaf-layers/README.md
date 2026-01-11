# tree levels

Write a function, _leafLayers_, that takes in the root of a binary tree. The function should return
a 2D array where each subarray represents a "leaf layer" of the tree.

To get a leaf layer, take all leaf nodes in tree. Then, conceptually "remove" them from the tree. This will
create new "leaves". Repeat this process until the tree is empty.

You don't need to actually delete the nodes from the tree, just return the array of layers.

#### test_00:

```js
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

leafLayers(a); // ->
// [
//   ['d', 'e', 'f'],
//   ['b', 'c'],
//   ['a']
// ]
```

#### test_01:

```js
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

leafLayers(a); // ->
// [
//   ['d', 'g', 'h', 'i'],
//   ['e', 'f'],
//   ['b', 'c'],
//   ['a'],
// ]
```

#### test_02:

```js
const q = new Node("q");
const r = new Node("r");
const s = new Node("s");
const t = new Node("t");
const u = new Node("u");
const v = new Node("v");

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//      q
//    /   \
//   r     s
//    \
//     t
//    /
//   u
//  /
// v

leafLayers(q); //->
// [
//   ['v', 's'],
//   ['u'],
//   ['t'],
//   ['r'],
//   ['q'],
// ]
```

#### test_03:

```js
leafLayers(null); // -> []
```

#### test_04:

```js
const a = new Node("x");
const b = new Node("x");
const c = new Node("x");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("x");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//         x
//      /    \
//     x      x
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   x

leafLayers(a); // ->
// [
//   ['d', 'g', 'h', 'x'],
//   ['e', 'f'],
//   ['x', 'x'],
//   ['x'],
// ]
```