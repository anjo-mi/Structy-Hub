# build tree in post

Write a function, _buildTreeInPost_, that takes in an array of in-ordered values and an array of
post-ordered values for a binary tree. The function should build a binary tree that has the given
in-order and post-order traversal structure. The function should return the root of this tree.

You can assume that the values of inorder and postorder are unique.


#### test_00

```js
buildTreeInPost(
  [ 'y', 'x', 'z' ],
  [ 'y', 'z', 'x' ] 
);
//       x
//    /    \
//   y      z
```

#### test_01

```js
buildTreeInPost(
  [ 'd', 'b', 'e', 'a', 'f', 'c', 'g' ],
  [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ] 
);
//      a
//    /    \
//   b      c
//  / \    / \
// d   e  f   g
```

#### test_02

```js
buildTreeInPost(
  [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
  [ 'd', 'g', 'h', 'e', 'b', 'f', 'c', 'a' ] 
);
//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h
```

#### test_03

```js
buildTreeInPost(
  ['m', 'n'],
  ['m', 'n']
);
//       n
//     /
//    m
```

#### test_04

```js
buildTreeInPost(
  ['n', 'm'],
  ['m', 'n']
);
//     n
//      \
//       m
```
