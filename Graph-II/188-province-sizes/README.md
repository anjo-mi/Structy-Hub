## province sizes

Write a function, _provinceSizes_, that takes in a number of cities _n_ and an array of _roads_ which
connect cities. Roads can be traveled in both directions. Cities are named from 0 to n.

A "province" is a group of 1 or more cities that are connected by roads. The "size" of a province is
the number of cities that make up that province.

Your function should return an array containing the sizes of the provinces. You may return the
result in any order.

Solve this using Union-Find.

#### test_00:

```js
provinceSizes(6, [
  [4, 5],
  [1, 0],
  [2, 3],
  [0, 5],
  [5, 1],
  [4, 0],
]); // -> [4, 2]
```

#### test_01:

```js
provinceSizes(5, [
  [4, 0],
  [3, 2],
]); // -> [1, 2, 2]
```

#### test_02:

```js
provinceSizes(7, [
  [3, 2],
  [4, 1],
  [0, 2],
  [3, 0],
  [2, 5],
]); // -> [2, 4, 1]
```

#### test_03:

```js
provinceSizes(7, [
  [1, 6],
  [0, 2],
  [6, 3],
  [5, 1],
  [1, 2],
  [3, 4],
  [1, 4],
  [3, 0],
]); // -> [7]
```