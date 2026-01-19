# flatten tree

Write a function, _flattenTree_, that takes in the root of a binary tree. The function should modify
the binary tree by flattening it into a "linked-list" using the same tree nodes. In the resulting
"linked-list", left pointers should be null and right pointers should point to the next node in the
list. The order of the nodes in the resulting "linked-list" should follow pre-order. 

You can assume the tree contains at least one node.

The function should mutate the tree in-place.

The function should return the root/head of the list.

```plaintext
For example, this tree:
 
        a
      /   \
    b      c
   / \      \
  d   e      f

Should be flattened into:

      a
       \
        b
         \
          d
           \
            e
             \
              c
               \
                f
```

#### test_00

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

flattenTree(a); // ->
//      a
//       \
//        b
//         \
//          d
//           \
//            e
//            \
//             c
//              \
//               f
```


#### test_01

```js
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const e = new Node("e");

a.left = b;
a.right = c;
b.right = e;

//      a
//    /   \
//   b     c
//   \     
//    e     

flattenTree(a); // ->
//      a
//       \
//        b
//         \
//          e
//           \
//            c
```

#### test_02

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
d.left = e;
e.left = f;
f.left = g;

//             a
//           /   \
//          b     c
//         /     
//        d     
//       / 
//      e
//     /
//    f
//   /
//  g

flattenTree(a); // ->
//      a
//       \
//        b
//         \
//          d
//           \
//            e
//            \
//             f
//             \
//              g
//              \
//               c
```
