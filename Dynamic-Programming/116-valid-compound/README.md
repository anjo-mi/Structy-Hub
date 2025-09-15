## valid compound

You are a chemist and have to figure out if you can make a compound from some given elements!

Write a function, _validCompound_, that takes in a target compound and an array of elements. The function should return a boolean
indicating whether or not the compound can be created from the given elements.

A compound is made by concatenating one or more elements together.

You may reuse elements of the array as many times as needed to make a compound.

#### test_00:

```js
validCompound("neco", [
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
]); // -> true
```

#### test_01:

```js
validCompound("nerco", [
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
]); // -> false
```

#### test_02:

```js
validCompound("sir", [
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
]); // -> true
```

#### test_03:

```js
validCompound("noses", [
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
]); // -> false
```

#### test_04:

```js
validCompound("onbeinos", [
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
]); // -> true
```

#### test_05:

```js
validCompound("cocococococococococococococococococococococococococococococox", [
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
]); // -> false
```
