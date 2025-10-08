## detect dictionary

Write a function, _detectDictionary_, that takes in a dictionary of words and an alphabet string.
The function should return a boolean indicating whether or not all words of the dictionary are
[lexically-ordered](https://en.wikipedia.org/wiki/Lexicographic_order) according to the alphabet.

You can assume that all characters are lowercase a-z.

You can assume that the alphabet contains all 26 letters.

#### test_00:

```js
const dictionary = ["zoo", "tick", "tack", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> true
```

#### test_01:

```js
const dictionary = ["zoo", "tack", "tick", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> false
```

#### test_02:

```js
const dictionary = ["zoos", "zoo", "tick", "tack", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
detectDictionary(dictionary, alphabet); // -> false
```

#### test_03:

```js
const dictionary = ["miles", "milestone", "proper", "process", "goal"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> true
```

#### test_04:

```js
const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> true
```

#### test_05:

```js
const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal", "apple"];
const alphabet = "mnoijpqrshkltabcdefguvwzxy";
detectDictionary(dictionary, alphabet); // -> false
```
