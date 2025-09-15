## is subsequence

Write a function, _isSubsequence_, that takes in string1 and string2. The function should return a boolean indicating whether or
not string1 is a subsequence of string2.

A subsequence is a string that can be formed by deleting 0 or more characters from another string.

#### test_00:

```js
isSubsequence("bde", "abcdef"); // -> true
```

#### test_01:

```js
isSubsequence("bda", "abcdef"); // -> false
```

#### test_02:

```js
isSubsequence("ser", "super"); // -> true
```

#### test_03:

```js
isSubsequence("serr", "super"); // -> false
```

#### test_04:

```js
isSubsequence("ama", "camera"); // -> true
```

#### test_05:

```js
isSubsequence("unfun", "unfortunate"); // -> true
```

#### test_06:

```js
isSubsequence("riverbed", "river"); // -> false
```

#### test_07:

```js
isSubsequence("river", "riverbed"); // -> true
```
