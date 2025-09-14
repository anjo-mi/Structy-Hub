# five sort

Write a function, _fiveSort_, that takes in an array of numbers as an argument. The function should
rearrange elements of the array such that all 5s appear at the end. Your function should perform
this operation **in-place** by mutating the original array. The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of
the array.

**Important: Your function needs to mutate the original array in-place and should not return a new
array. It will fail the test cases if you do not modify the original input array.**

#### test_00

```js
fiveSort([5, 0]);
// -> [0, 5]
```

#### test_01

```js
fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5]
```

#### test_02

```js
fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]
```

#### test_03

```js
fiveSort([5, 5, 5, 1, 1, 1, 4]);
// -> [4, 1, 1, 1, 5, 5, 5]
```

#### test_04

```js
fiveSort([5, 5, 6, 5, 5, 5, 5]);
// -> [6, 5, 5, 5, 5, 5, 5]
```

#### test_05

```js
fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]
```

#### test_06

```js
const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const nums = [...fives, ...fours];
fiveSort(nums);
// twenty-thousand 4s followed by twenty-thousand 5s
// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]
```
