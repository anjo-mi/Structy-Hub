## string search

Write a function, *stringSearch*, that takes in a grid of letters and a string as arguments.
The function should return a boolean indicating whether or not the string can be found in the grid
as a path by connecting horizontal or vertical positions. The path can begin at any position, but you
cannot reuse a position more than once in the path.

You can assume that all letters are lowercase and alphabetic.

#### test_00:

```js
const grid = [
  ['e', 'y', 'h', 'i', 'j'],
  ['q', 'x', 'e', 'r', 'p'],
  ['r', 'o', 'l', 'l', 'n'],
  ['p', 'r', 'x', 'o', 'h'],
  ['a', 'a', 'm', 'c', 'm']
];
stringSearch(grid, 'hello'); // -> true
```

#### test_01:

```js
const grid = [
  ['e', 'y', 'h', 'i', 'j'],
  ['q', 'x', 'e', 'r', 'p'],
  ['r', 'o', 'l', 'l', 'n'],
  ['p', 'r', 'x', 'o', 'h'],
  ['a', 'a', 'm', 'c', 'm']
];
stringSearch(grid, 'proxy'); // -> true
```

#### test_02:

```js
const grid = [
  ['e', 'y', 'h', 'i', 'j'],
  ['q', 'x', 'e', 'r', 'p'],
  ['r', 'o', 'l', 'l', 'n'],
  ['p', 'r', 'x', 'o', 'h'],
  ['a', 'a', 'm', 'c', 'm']
];
stringSearch(grid, 'rolling'); // -> false
```

#### test_03:

```js
const grid = [
  ['e', 'y', 'h', 'i', 'j'],
  ['q', 'x', 'e', 'r', 'p'],
  ['r', 'o', 'l', 'l', 'n'],
  ['p', 'r', 'x', 'o', 'h'],
  ['a', 'a', 'm', 'z', 'm']
];
stringSearch(grid, 'zoo'); // -> false
```

#### test_04:

```js
const grid = [
  ['q', 'w', 'h', 'i', 'j'],
  ['q', 'e', 'r', 'o', 'p'],
  ['h', 'y', 't', 'x', 'z'],
  ['k', 'o', 'm', 'o', 'p']
];
stringSearch(grid, 'qwerty'); // -> true
```

#### test_05:

```js
const grid = [ 
  [ 'f', 'd', 'i', 'e', 'l', 'u', 'j', 't', 'q', 'v', 'o', 'p' ], 
  [ 'o', 'p', 'b', 'e', 'm', 'w', 'm', 'l', 'h', 'j', 's', 'v' ], 
  [ 'g', 'b', 's', 'm', 'i', 'w', 'w', 'h', 'l', 'm', 'l', 'n' ], 
  [ 'a', 'l', 's', 'k', 'p', 'c', 't', 'u', 'v', 'b', 'c', 'm' ], 
  [ 'm', 't', 'c', 'k', 'e', 'n', 'r', 'b', 'a', 'z', 'l', 'c' ], 
  [ 'q', 'm', 'a', 'p', 'a', 'p', 'i', 'i', 'u', 't', 'z', 'z' ], 
  [ 'd', 'u', 'z', 'o', 'e', 'r', 'a', 't', 't', 'c', 'q', 'k' ], 
  [ 'f', 'u', 'z', 'g', 'c', 'i', 'k', 'v', 'o', 'f', 's', 'w' ], 
  [ 'p', 'h', 'u', 'i', 'k', 'c', 'v', 'v', 'h', 'q', 'v', 'i' ], 
  [ 'l', 'q', 'w', 'f', 'y', 'g', 'w', 'f', 'a', 'u', 'x', 'q' ] 
];
stringSearch(grid, 'paprika'); // -> true
```

#### test_06:

```js
const grid = [
    [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
    [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
    [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
    [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
    [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
    [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
    [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
    [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 'x', 'x' ],
    [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 'x', 'h' ],
];
stringSearch(grid, 'sssssssh'); // -> false
```

#### test_07:

```js
const grid = [
  ['a', 'b', 'a'],
  ['t', 'x', 'x'],
  ['x', 'x', 'x'],
];
stringSearch(grid, 'abat'); // -> true
```

#### test_08:

```js
const grid = [
  ['a', 'o', 'o', 'o', 'o'],
  ['b', 'c', 'd', 'o', 'o'],
  ['c', 'f', 'e', 'o', 'o'],
  ['d', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o'],
]
stringSearch(grid, 'abcdefc'); // -> True
```
