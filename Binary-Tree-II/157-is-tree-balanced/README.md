## is tree balanced

Write a function, _isTreeBalanced_, that takes in the root of a binary tree. The function should
return a boolean indicating whether or not the tree is "balanced".

A "balanced" binary tree is a binary tree where the height between the left and right subtrees
differs by at most 1 for every node.


#### test_00:

```js
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");

a.left = b;
a.right = c;

//         a
//       /   \
//      b    c

isTreeBalanced(a); // -> true
```

#### test_01:

```js
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.left = b;
a.right = c;
b.right = d;

//         a
//       /   \
//      b    c
//      \
//      d

isTreeBalanced(a); // -> true
```


#### test_02:

```js
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");

a.right = b;
b.right = c;

//        a
//         \
//          b
//          \
//           c

isTreeBalanced(a); // -> false
```

#### test_03:

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

isTreeBalanced(a); // -> true
```

#### test_04:

```js
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

isTreeBalanced(a); // -> true
```

#### test_05:

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
c.right = e;
d.left = f;

//        a
//      /   \
//     b     c
//    /      \
//   d        e
//  /
// f

isTreeBalanced(a); // -> false
```


#### test_06:

```js
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
g.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g
//   \
//    h

isTreeBalanced(a); // -> false
```

#### test_07:

```js
const a = new Node("a");

//        a

isTreeBalanced(a); // -> true
```

#### test_08:

```js
isTreeBalanced(null); // -> true
```