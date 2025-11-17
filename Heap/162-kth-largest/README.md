## kth-largest

Write a function, *kthLargest*, that takes in an array of numbers and a value, k. The function should
return the k-th largest element of the array.

#### test_00:

```js
kthLargest([9,2,6,6,1,5,8,7], 3); // -> 7
```

#### test_01:

```js
kthLargest([9,2,6,6,1,5,8,7], 4); // -> 6
```

#### test_02:

```js
kthLargest([9,2,6,6,1,5,8,7], 5); // -> 6
```

#### test_03:

```js
kthLargest([10,1,8,5,2,4], 2); // -> 8
```

#### test_04:

```js
numbers = [  
  4,5,85,77,47,80,37,42,3,6,62,33,69,68,16,20,83,39,14,58,75,35,72,36,19,18,66,61,41,79,28,43,7,24,40,53,32,12
]
kthLargest(numbers, 9); // -> 68
```

#### test_05:

```js
numbers = [  
  4,5,85,77,47,80,37,42,3,6,62,33,69,68,16,20,83,39,14,58,75,35,72,36,19,18,66,61,41,79,28,43,7,24,40,53,32,12
]
kthLargest(numbers, 5); // -> 77
```