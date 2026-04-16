## union-find code II

Let's learn more about union-find algorithm by implementing size and path-compression. Watch the approach and walkthrough
videos first.

Write a function, _countComponents_, that takes in a number of nodes (n) and an array of edges for an
undirected graph. In the graph, nodes are labeled from 0 to n - 1. The function should return the
number of connected components in the given graph. 

Solve this by implementing the complete Union-Find algorithm with size and path-compression.

#### test_00:

```js
countComponents(10, [
  [3, 2],
  [5, 4],
  [4, 3],
  [2, 1],
  [0, 1],
  [8, 9],
  [5, 6],
  [7, 8]
]); // -> 2
```

#### test_01:

```js
countComponents(7, [
  [0, 2],
  [1, 0],
  [4, 3],
  [2, 5],
  [3, 6]
]); // -> 2
```

#### test_02:

```js
countComponents(6, [
  [0, 3],
  [5, 3],
  [4, 2]
]); // -> 3
```

#### test_03:

```js
countComponents(6, [
  [0, 3],
  [5, 3],
  [4, 2],
  [3, 2],
  [3, 1]
]); // -> 1
```

#### test_04:

```js
countComponents(100, [
  [50, 60],
  [80, 20]
]); // -> 98
```
