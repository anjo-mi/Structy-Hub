## count compounds

You are a chemist and have to figure out how many ways you can make a given compound.

Write a function, _countCompounds_, that takes in a target compound and an array of elements. The function should return the number
of ways we can make the compound with the given elements.

A compound is made by concatenating one or more elements together.

You may reuse elements of the array as many times as needed to make a compound.

#### test_00:

```js
countCompounds("neco", [
  "Ne",
  "O",
  "Be",
  "I",
  "N",
  "Os",
  "Si",
  "S",
  "Co",
  "C",
  "Ir",
]); // -> 2
```

#### test_01:

```js
countCompounds("nerco", [
  "Ne",
  "O",
  "Be",
  "I",
  "N",
  "Os",
  "Si",
  "S",
  "Co",
  "C",
  "Ir",
]); // -> 0
```

#### test_02:

```js
countCompounds("sir", [
  "Ne",
  "O",
  "Be",
  "I",
  "N",
  "Os",
  "Si",
  "S",
  "Co",
  "C",
  "Ir",
]); // -> 1
```

#### test_03:

```js
countCompounds("hocli", [
  "C",
  "Cl",
  "I",
  "Ho",
  "Li",
  "La",
  "H",
  "O"
]); // -> 4
```

#### test_04:

```js
countCompounds("noses", [
  "Ne",
  "O",
  "Be",
  "I",
  "N",
  "Os",
  "Si",
  "S",
  "Co",
  "C",
  "Ir",
]); // -> 0
```

#### test_05:

```js
countCompounds("onbeinos", [
  "Ne",
  "O",
  "Be",
  "I",
  "N",
  "Os",
  "Si",
  "S",
  "Co",
  "C",
  "Ir",
]); // -> 2
```

#### test_06:

```js
countCompounds("necoonbeinos", [
  "Ne",
  "O",
  "Be",
  "I",
  "N",
  "Os",
  "Si",
  "S",
  "Co",
  "C",
  "Ir",
]); // -> 4
```

#### test_07:

```js
countCompounds("cocococococococococococococococococococococococococococococox", [
  "Ne",
  "O",
  "Be",
  "I",
  "N",
  "Os",
  "Si",
  "S",
  "Co",
  "C",
  "Ir",
]); // -> 0
```
