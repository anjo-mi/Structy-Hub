## virus spread

Oh no! There is a computer virus going around in our data center. The virus spreads to adjacent
computers.

Write a function, _virusSpread_, that takes in a grid. In the grid, 0's are empty spaces, 1's are
clean computers, and 2's are infected computers. Every hour, the virus spreads from infected
computers to immediately adjacent clean computers. The virus can only spread to adjacent computers
that are up, down, left, or right.

The function should return the number of hours it will take for all computers to be infected. If it
is impossible for all computers to become infected, then return -1.

#### test_00:

```js
const grid = [
  [1,1,1],
  [0,1,0],
  [0,1,2]
];
virusSpread(grid); // -> 4
```

#### test_01:

```js
const grid = [
  [1,0,1],
  [0,1,0],
  [0,1,2]
];
virusSpread(grid); // -> -1
```

#### test_02:

```js
const grid = [
  [0,0,0,0,1,1,2],
  [0,1,1,1,1,1,0],
  [0,2,0,0,0,0,0]
];
virusSpread(grid); // -> 3
```

#### test_03:

```js
const grid = [
  [0,0,0,0,1,1,2],
  [0,1,1,1,1,1,0],
  [0,2,0,0,0,0,0],
  [0,0,0,0,1,1,0]
];
virusSpread(grid); // -> -1
```

#### test_04:

```js
const grid = [
  [2,1,1,1,1,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,1,0,0],
  [0,0,0,1,1,0,1],
  [0,0,0,2,2,0,1],
  [0,0,0,0,0,0,1],
  [2,1,1,1,1,1,1]
];
virusSpread(grid); // -> 9
```
