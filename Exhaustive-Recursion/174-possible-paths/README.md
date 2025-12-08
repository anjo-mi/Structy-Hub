## possible paths

Write a function that takes in a graph adjacency list, a source node, and a destination node. The
function should return an array containing all possible paths that travel between the source and
destination.

You can assume that the graph is a DAG (directed-acyclic-graph).

#### test_00:

```js
const graph = {
  "a": ["b", "c", "d"],
  "b": ["d"],
  "c": ["d"],
  "d": []
};
possiblePaths(graph, "a", "d"); // ->
// [
//   ["a", "b", "d"],
//   ["a", "c", "d"],
//   ["a", "d"]
// ]
```

#### test_01:

```js
const graph = {
  "a": ["b", "c", "d"],
  "b": ["d"],
  "c": ["d"],
  "d": []
};
possiblePaths(graph, "c", "b"); // ->
// []
```

#### test_02:

```js
const graph = {
  "a": ["b", "d"],
  "b": ["c", "e"],
  "c": ["e"],
  "d": ["b", "f"],
  "e": ["f"],
  "f": []
};
possiblePaths(graph, "a", "c"); // ->
// [
//   ["a", "b", "c"],
//   ["a", "d", "b", "c"]
// ]
```

#### test_03:

```js
const graph = {
  "a": ["b", "d"],
  "b": ["c", "e"],
  "c": ["e"],
  "d": ["b", "f"],
  "e": ["f"],
  "f": []
};
possiblePaths(graph, "a", "f"); // ->
// [
//   ["a", "b", "c", "e", "f"],
//   ["a", "b", "e", "f"],
//   ["a", "d", "b", "c", "e", "f"],
//   ["a", "d", "b", "e", "f"],
//   ["a", "d", "f"]
// ]
```
