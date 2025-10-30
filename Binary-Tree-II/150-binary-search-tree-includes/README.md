## binary search tree includes

Write a function, _binarySearchTreeIncludes_, that takes in the root of a binary search tree
containing numbers and a target value. The function should return a boolean indicating whether or
not the target is found within the tree.

A [Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree) is a binary tree where all
values within a node's left subtree are smaller than the node's value and all values in a node's
right subtree are greater than or equal to the node's value.

Your solution should have a best case runtime of O(log(n)).

### tree a

```js
const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(9);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     18
//  / \     \
// 3   9     19
```

#### test_00:

```js
binarySearchTreeIncludes(a, 9); // -> true
```

#### test_01:

```js
binarySearchTreeIncludes(a, 15); // -> false
```

#### test_02:

```js
binarySearchTreeIncludes(a, 1); // -> false
```

#### test_03:

```js
binarySearchTreeIncludes(a, 12); // -> true
```

### tree q

```js
const q = new Node(54);
const r = new Node(42);
const s = new Node(70);
const t = new Node(31);
const u = new Node(50);
const v = new Node(72);
const w = new Node(47);
const x = new Node(90);

q.left = r;
q.right = s;
r.left = t;
r.right = u;
s.right = v;
u.left = w;
v.right = x;

//       54
//     /    \
//    42     70
//   / \      \
// 31   50     72
//     /        \
//    47         90
```

#### test_04:

```js
binarySearchTreeIncludes(q, 55); // -> false
```

#### test_05:

```js
binarySearchTreeIncludes(q, 47); // -> true
```

#### test_06:

```js
binarySearchTreeIncludes(q, 49); // -> false
```

#### test_07:

```js
binarySearchTreeIncludes(q, 70); // -> true
```

#### test_08:

```js
binarySearchTreeIncludes(q, 100); // -> false
```
