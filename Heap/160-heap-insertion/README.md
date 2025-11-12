# heap insertion

Implement the _insert_ method for the existing `MinHeap` class. The method should properly add a
given value into the heap, maintaining min heap order and height balance.

Start by watching the approach video. You'll also want to follow along with the walkthrough video.
You won't know how to implement this if it is your first time dealing with heaps.


#### test_00

```js
const heap = new MinHeap();
heap.insert(12);
heap.insert(13);
heap.insert(11);
heap.insert(4);
heap.insert(20);
heap.insert(9);
heap.insert(22);
heap.insert(14);

//
//               4
//            /    \
//          11      9
//         / \    /  \
//       13  20  12  22
//      /
//    14
//
//
// [ 4, 11, 9, 13, 20, 12, 22, 14 ]
```

#### test_01

```js
const heap = new MinHeap();
heap.insert(12);
heap.insert(93);
heap.insert(63);
heap.insert(16);
heap.insert(-500);
heap.insert(21);
heap.insert(11);
heap.insert(43);
heap.insert(-6);
heap.insert(35);
heap.insert(15);
heap.insert(37);
heap.insert(29);
heap.insert(-501);
heap.insert(80);

//                              -501
//                      /                \
//                    -6                -500
//                 /     \            /       \
//               12      15          29        11
//             /  \     /  \       /  \       /  \
//            93  43   35  16    63   37     21  80
//
//
// [ -501, -6, -500, 12, 15, 29, 11, 93, 43, 35, 16, 63, 37, 21, 80 ]
```
