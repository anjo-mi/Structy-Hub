## build a queue

Implement the _enqueue_ and _dequeue_ methods for the existing `Queue` class. The _enqueue_ method
should add a given value into the queue. The _dequeue_ should return and remove an item from the
queue following first-in, first-out order.

Your implementation should use a linked-list and not any built in containers. 

#### test_00:

```js
const queue = new Queue();
queue.enqueue("a");
queue.size; // -> 1
queue.dequeue(); // -> a
queue.enqueue("b");
queue.enqueue("c");
queue.size; // -> 2
queue.dequeue(); // -> b
queue.dequeue(); // -> c
queue.size; // -> 0
```

#### test_01:

```js
const queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.dequeue(); // -> a
queue.enqueue("d");
queue.enqueue("e");
queue.size; // -> 4
queue.dequeue(); // -> b
queue.dequeue(); // -> c
queue.dequeue(); // -> d
queue.dequeue(); // -> e
queue.enqueue("x");
queue.enqueue("y");
queue.size; // -> 2
queue.dequeue(); // -> x
queue.dequeue(); // -> y
```

#### test_02:

```js
const queue = new Queue();
for (let i = 1; i <= 150000; i += 1) {
  queue.enqueue(i);
}
for (let i = 1; i <= 149999; i += 1) {
  queue.dequeue();
}
queue.size; // -> 1
queue.dequeue(); // -> 150000
```
