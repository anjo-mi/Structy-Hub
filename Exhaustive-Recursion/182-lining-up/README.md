## lining up

Write a function, _liningUp_, that takes in an array of people and a capacity number. We need to add
people to the waitlist for a popular restaurant, but space is limited.

The function should return a 2D array containing all the possible orders by which the people can line up. A
valid line must be filled up exactly to the capacity.

#### test_00:

```js
liningUp(["jason", "jen", "cody", "vicky"], 3); // ->
// [ 
//   [ 'jason', 'jen', 'cody' ], 
//   [ 'jen', 'jason', 'cody' ], 
//   [ 'jen', 'cody', 'jason' ], 
//   [ 'jason', 'cody', 'jen' ], 
//   [ 'cody', 'jason', 'jen' ], 
//   [ 'cody', 'jen', 'jason' ], 
//   [ 'jason', 'jen', 'vicky' ], 
//   [ 'jen', 'jason', 'vicky' ], 
//   [ 'jen', 'vicky', 'jason' ], 
//   [ 'jason', 'vicky', 'jen' ], 
//   [ 'vicky', 'jason', 'jen' ], 
//   [ 'vicky', 'jen', 'jason' ], 
//   [ 'jason', 'cody', 'vicky' ], 
//   [ 'cody', 'jason', 'vicky' ], 
//   [ 'cody', 'vicky', 'jason' ], 
//   [ 'jason', 'vicky', 'cody' ], 
//   [ 'vicky', 'jason', 'cody' ], 
//   [ 'vicky', 'cody', 'jason' ], 
//   [ 'jen', 'cody', 'vicky' ], 
//   [ 'cody', 'jen', 'vicky' ], 
//   [ 'cody', 'vicky', 'jen' ], 
//   [ 'jen', 'vicky', 'cody' ], 
//   [ 'vicky', 'jen', 'cody' ], 
//   [ 'vicky', 'cody', 'jen' ] 
// ] 
```

#### test_01:

```js
liningUp(["autumn", "anj", "aud"], 2); // ->
// [ 
//   [ 'autumn', 'anj' ], 
//   [ 'anj', 'autumn' ], 
//   [ 'autumn', 'aud' ], 
//   [ 'aud', 'autumn' ], 
//   [ 'anj', 'aud' ], 
//   [ 'aud', 'anj' ] 
// ] 
```

#### test_02:

```js
liningUp(["anj", "aud"], 2); // ->
// [ 
//   [ 'anj', 'aud' ], 
//   [ 'aud', 'anj' ] 
// ] 
```

#### test_03:

```js
liningUp(["anj", "aud"], 1); // ->
// [ 
//   [ 'anj' ], 
//   [ 'aud' ] 
// ] 
```
