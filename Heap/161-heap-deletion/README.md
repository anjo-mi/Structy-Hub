# heap deletion

Implement the _extractMin_ method for the existing `MinHeap` class. The method should return and
remove the smallest value in the heap, maintaining min heap order and height balance.

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
heap.extractMin(); // -> 4
heap.extractMin(); // -> 9
heap.extractMin(); // -> 11
```

#### test_01

```js
const heap = new MinHeap();
heap.insert(12);
heap.insert(93);
heap.insert(63);
heap.insert(16);
heap.extractMin(); // -> 12
heap.extractMin(); // -> 16
heap.insert(-500);
heap.insert(21);
heap.insert(11);
heap.insert(43);
heap.insert(-6);
heap.insert(35);
heap.insert(15);
heap.extractMin(); //-> -500
heap.extractMin(); //-> -6
heap.extractMin(); // -> 11
heap.extractMin(); // -> 15
heap.extractMin(); // -> 21
heap.extractMin(); // -> 35
heap.extractMin(); // -> 43
heap.extractMin(); // -> 63
heap.extractMin(); // -> 93
```
