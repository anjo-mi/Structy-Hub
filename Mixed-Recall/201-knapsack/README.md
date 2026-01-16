## knapsack

Write a function _knapsack_ that takes in an array of item values, an array of item weights, and a
weight limit. The _i-th_ item has a value of _values[i]_ and a weight of _weights[i]_. Your job is to
pick items to pack into your knapsack so that its total weight does not exceed the limit and the value of
the items is maximized. You may either take an item once or not at all. You cannot take the same
item multiple times. Return the maximum total value of items you can pack into the knapsack.

#### test_00:

```js
knapsack([5, 4, 9], [6, 1, 15], 20); // -> 13
```

#### test_01:

```js
knapsack([5, 1, 6], [4, 1, 5], 20); // -> 12
```

#### test_02:

```js
knapsack([5, 1, 7, 3], [4, 1, 5, 2], 8); // -> 11
```

#### test_03:

```js
knapsack([89, 45, 12, 50], [40, 20, 10, 15], 50); // -> 107
```

#### test_04:

```js
knapsack([3, 5, 8, 7], [2, 4, 8, 6], 15); // -> 16
```

#### test_05:

```js
knapsack(
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
  100); // -> 42
```
