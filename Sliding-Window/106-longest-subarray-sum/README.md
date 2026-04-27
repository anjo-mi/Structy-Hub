## longest subarray sum

Write a function that takes in an array and a target sum. The function should return the length of the longest subarray
that sums to the target.

You can assume that the elements of the array are nonnegative.

If there is no subarray that sums to the target, then return -1.

#### test_00:

```js
longestSubarraySum([1, 2, 1, 5, 2, 3, 10, 1, 9, 4, 3, 3, 7], 10); // -> 4
// the longest subarray with a sum of 10 is [2, 1, 5, 2] and its length is 4
```

#### test_01:

```js
longestSubarraySum([7, 2, 4, 2, 1], 5); // -> -1
```

#### test_02:

```js
longestSubarraySum([4, 2, 2, 2, 1, 1], 6); // -> 4
```

#### test_03:

```js
longestSubarraySum([1, 5, 2, 4, 9, 2], 11); // -> 3
```

#### test_04:

```js
longestSubarraySum([10, 4, 8, 4], 8); // -> 1
```

#### test_05:

```js
longestSubarraySum([10, 4, 8, 0, 4], 8); // -> 2

```

#### test_06:

```js
longestSubarraySum([2, 4, 1, 1, 2], 10); // -> 5
```
