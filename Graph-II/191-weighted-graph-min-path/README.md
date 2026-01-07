## weighted graph min path

Write a function that takes in the adjacency list for a weighted graph and two nodes, src and dst.
The function should return the minimum cost path that travels from src to dst.

The cost of a path is the sum of the weights of edges traveled.

You can assume that the weights are non-negative numbers and there is at least one path between src and dst.

#### test_00:

```js
const graph = {
  a: { b: 2, d: 9, c: 5 },
  b: { a: 2, d: 4, e: 6 },
  c: { a: 5, e: 4 },
  d: { a: 9, b: 4, e: 1 },
  e: { b: 6, c: 4, d: 1 },   
};
weightedGraphMinPath(graph, 'a', 'e'); // -> 7
```

#### test_01:

```js
const graph = {
  a: { b: 1, c: 1 },
  b: { c: 3, a: 1 },
  c: { b: 3, d: 1, a: 1 },
  d: { c: 1, b: 2 },
};
weightedGraphMinPath(graph, 'a', 'd'); // -> 2
```

#### test_02:

```js
const graph = {
  q: { r: 5, s: 10 },
  r: { q: 5, s: 9, u: 2 },
  s: { q: 10, r: 9, t: 1, v: 8 },
  t: { s: 1 },
  u: { r: 2, s: 1 },
  v: {}, 
};
weightedGraphMinPath(graph, 'q', 'v'); // -> 16
```

#### test_03:

```js
const graph = {
  q: { r: 5, s: 10 },
  r: { q: 5, s: 9, u: 2 },
  s: { q: 10, r: 9, t: 1, v: 8 },
  t: { s: 1 },
  u: { r: 2, s: 1 },
  v: {}, 
};
weightedGraphMinPath(graph, 'r', 'v'); // -> 11
```

#### test_04:

```js
const graph = {
  x: {q: 1, e: 10 },
  b: {e: 7, q: 8 },
  q: {x: 1, b: 8 },
  e: {b: 7, x: 10 },
};
weightedGraphMinPath(graph, 'b', 'x'); // -> 9
```
