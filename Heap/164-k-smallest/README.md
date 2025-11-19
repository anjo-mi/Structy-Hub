## k-smallest

Write a function that takes in an array of numbers and a value, k. The function should return the k
smallest numbers in the array. The resulting array should be ordered from least to greatest.

#### test_00:

```js
kSmallest([8, 2, 7, -3, 5, 10], 3); 
// -> [-3, 2, 5]
```

#### test_01:

```js
kSmallest([84, 22, 52, 69, 71, 22, 88, 100, 13, 89, 79], 4);
// -> [13, 22, 22, 52]
```

#### test_02:

```js
kSmallest([
  43, 35, 62, 31, 86, 81, 58, 80, 91, 13, 54, 78, 
  75, 69, 60, 8, 22, 12, 30, 79, 100, 2, 64, 57, 
  11, 55, 7, 68, 66, 14, 45, 26, 83, 24, 28, 76, 
  34, 89, 37, 32, 41, 88, 20, 82, 59, 4, 40, 9, 
  74, 23
], 5);
// -> [2, 4, 7, 8, 9]
```
