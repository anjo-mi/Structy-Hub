## lexical order

Write a function, _lexicalOrder_, that takes in 2 words and an alphabet string as an argument. The
function should return true if the first word should appear before the second word if
[lexically-ordered](https://en.wikipedia.org/wiki/Lexicographic_order) according to the given
alphabet order. If the second word should appear first, then return false.

Note that the alphabet string may be any arbitrary string.

Intuitively, Lexical Order is like "dictionary" order:

```
Given the normal english alphabet:

'apple' appears before 'boot',
because 'a' comes before 'b' in the alphabet.

'appetite' appears before 'apple',
because 'e' comes before 'l' in the alphabet.

'app' appears before 'apple',
because 'app' is a prefix of 'apple'.
```

You can assume that all characters are lowercase a-z.

You can assume that the alphabet contains all 26 letters.

#### test_00:

```js
const alphabet = "abcdefghijklmnopqrstuvwxyz";
lexicalOrder("apple", "dock", alphabet); // -> true
```

#### test_01:

```js
const alphabet = "abcdefghijklmnopqrstuvwxyz";
lexicalOrder("apple", "ample", alphabet); // -> false
```

#### test_02:

```js
const alphabet = "abcdefghijklmnopqrstuvwxyz";
lexicalOrder("app", "application", alphabet); // -> true
```

#### test_03:

```js
const alphabet = "abcdefghijklmnopqrstuvwxyz";
lexicalOrder("backs", "backdoor", alphabet); // -> false
```

#### test_04:

```js
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
lexicalOrder("zoo", "dinner", alphabet); // -> true
```

#### test_05:

```js
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
lexicalOrder("leaper", "leap", alphabet); // -> false
```

#### test_06:

```js
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
lexicalOrder("backs", "backdoor", alphabet); // -> true
```

#### test_07:

```js
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
lexicalOrder("semper", "semper", alphabet); // -> true
```
