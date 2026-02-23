## all trips

You are given an array of bus routes, a start station, and an end station. A bus route is a pair of
two stations (a, b) such that the bus travels from a to b, but not from b to a.

Write a function that returns an array containing all possible trips we can make that travel from
the starting station to the ending station.

You can assume that there are no cycles in the bus routes.

#### test_00:

```js
const routes = [
  ["brookdale", "denton junction"],
  ["astor place", "brookdale"],
  ["astor place", "cony island"],
  ["astor place", "denton junction"],
  ["cony island", "denton junction"],
];
allTrips(routes, "astor place", "denton junction"); // ->
// [
//   ['astor place', 'brookdale', 'denton junction'],
//   ['astor place', 'cony island', 'denton junction'],
//   ['astor place', 'denton junction']
// ]
```

#### test_01:

```js
const routes = [
  ["brookdale", "denton junction"],
  ["astor place", "brookdale"],
  ["astor place", "cony island"],
  ["astor place", "denton junction"],
  ["cony island", "denton junction"],
];
allTrips(routes, "cony island", "brookdale"); // ->
// []
```

#### test_02:

```js
const routes = [
  ["arlington", "boerum"],
  ["boerum", "central"],
  ["central", "euclid"],
  ["euclid", "fairfax"],
  ["arlington", "dyckman"],
  ["boerum", "euclid"],
  ["dyckman", "boerum"],
  ["dyckman", "fairfax"],
];
allTrips(routes, "arlington", "central"); // ->
// [
//   ['arlington', 'boerum', 'central'],
//   ['arlington', 'dyckman', 'boerum', 'central']
// ]
```

#### test_03:

```js
const routes = [
  ["arlington", "boerum"],
  ["boerum", "central"],
  ["central", "euclid"],
  ["euclid", "fairfax"],
  ["arlington", "dyckman"],
  ["boerum", "euclid"],
  ["dyckman", "boerum"],
  ["dyckman", "fairfax"],
];
allTrips(routes, "arlington", "fairfax"); // ->
// [
//   ['arlington', 'boerum', 'central', 'euclid', 'fairfax'],
//   ['arlington', 'boerum', 'euclid', 'fairfax'],
//   ['arlington', 'dyckman', 'boerum', 'central', 'euclid', 'fairfax'],
//   ['arlington', 'dyckman', 'boerum', 'euclid', 'fairfax'],
//   ['arlington', 'dyckman', 'fairfax']
// ]
```
