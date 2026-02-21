## max increasing subseq

Write a function, _maxIncreasingSubseq_, that takes in an array of numbers as an argument. The
function should return the length of the longest subsequence of strictly increasing numbers.

A subsequence of an array can be created by deleting any elements of the array, while maintaining
the relative order of elements.

```
For example, given:

[4, 18, 20, 10, 12, 15, 19]

The longest increasing subsequence is 4, 10, 12, 15, 19.
This subsequence has a length of 5.
```

#### test_00:

```js
const numbers = [4, 18, 20, 10, 12, 15, 19];
maxIncreasingSubseq(numbers); // -> 5
```

#### test_01:

```js
const numbers = [12, 9, 2, 5, 4, 32, 90, 20];
maxIncreasingSubseq(numbers); // -> 4
```

#### test_02:

```js
const numbers = [42, 50, 51, 60, 55, 70, 4, 5, 70];
maxIncreasingSubseq(numbers); // -> 5
```

#### test_03:

```js
const numbers = [7, 14, 10, 12];
maxIncreasingSubseq(numbers); // -> 3
```

#### test_04:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
maxIncreasingSubseq(numbers); // -> 21
```

#### test_05:

```js
const numbers = [
  1, 2, 3, 4, 5, 12, 6, 30, 7, 8, 9, 10, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100,
  104,
];
maxIncreasingSubseq(numbers); // -> 23
```

#### test_06:

```js
const numbers = [
  1, 2, 300, 3, 4, 305, 5, 12, 6, 30, 7, 8, 9, 10, 10, 10, 15, 11, 12, 13, 10, 18, 14, 15, 16, 17,
  18, 19, 20, 21, 100, 101, 102, 103, 104, 105,
];
maxIncreasingSubseq(numbers); // -> 27
```

#### test_07:

```js
const numbers = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
];

maxIncreasingSubSeq(numbers); // -> 1
```

#### test_08:

```js
const numbers = [
  1, 2, 300, 3, 4, 305, 5, 10, 7, 10, 6, 12, 6, 30, 7, 8, 9, 10, 10, 16, 14, 9, 10, 15, 11, 12, 13, 
  10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100,101 ,102, 103, 104, 105
];
maxIncreasingSubseq(numbers); // -> 27
```