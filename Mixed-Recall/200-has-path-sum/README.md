# has path sum

Write a function, _hasPathSum_, that takes in the root of a binary tree and a target number. The
function should return a boolean indicating whether or not there is a path through the tree that
sums to the target.

A path must begin at the root and end at a leaf.

#### test_00:

```js
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

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

hasPathSum(a, 8); // -> true
```

#### test_01:

```js
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

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

hasPathSum(a, 12); // -> true
```

#### test_02:

```js
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

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

hasPathSum(a, 7); // -> false
```

#### test_03:

```js
const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

hasPathSum(a, 16); // -> false
```

#### test_04:

```js
const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

hasPathSum(a, 32); // -> true
```

#### test_05:

```js
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

hasPathSum(a, -10); // -> true
```

#### test_06:

```js
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

hasPathSum(a, -5); // -> false
```

#### test_07:

```js
const a = new Node(42);

//        42

hasPathSum(a, 42); // -> true
```
