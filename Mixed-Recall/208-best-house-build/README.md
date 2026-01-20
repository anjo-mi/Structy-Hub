## best house build

You are building a new house in the neighborhood and want to choose a location so that the house is
as close as possible to all other houses.

Write a function, _bestHouseBuild_, that takes in a grid. In the grid, 0's are empty spaces, 1's
are houses, and 2's are trees. Your job is to find an empty space on the grid that has the shortest
total travel distance to all houses. Your function should return a number that corresponds to this
shortest total travel distance. If it is not possible to choose a location that is that is reachable
by all houses, then return -1.

When calculating the distance, you can only move up, down, left, or right. You may not pass
through houses or trees.

#### test_00:

```js
const grid = [
  [1,0,0,0,1],
  [0,0,0,0,0],
  [0,0,1,0,0]
];
bestHouseBuild(grid); // -> 6
```

#### test_01:

```js
const grid = [
  [1,0,2,0,1],
  [0,0,0,0,0],
  [0,0,1,0,0]
];
bestHouseBuild(grid); // -> 7
```

#### test_02:

```js
const grid = [
  [0,0,0,1,0,0,0,0],
  [0,1,0,0,0,0,0,1],
  [0,0,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
];
bestHouseBuild(grid); // -> 8
```

#### test_03:

```js
const grid = [
  [0,0,0,1,0,0,0,0],
  [0,1,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1]
];
bestHouseBuild(grid); // -> 11
```

#### test_04:

```js
const grid = [
  [0,0,0,1,0,0,0,0],
  [0,1,0,0,0,2,0,0],
  [0,0,0,1,0,2,0,0],
  [0,0,0,0,0,2,0,0],
  [0,0,0,0,0,2,0,1]
];
bestHouseBuild(grid); // -> 13
```

#### test_05:

```js
const grid = [
  [0,0,0,1,0,0,0,0],
  [0,1,0,0,0,0,0,0],
  [0,0,0,1,0,2,2,2],
  [0,0,0,0,0,2,0,0],
  [0,0,0,0,0,2,0,1]
];
bestHouseBuild(grid); // -> -1
```

#### test_06:

```js
const grid = [
  [1,0],
];
bestHouseBuild(grid); // -> 1
```