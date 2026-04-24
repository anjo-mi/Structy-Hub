## count substring anagrams

Write a function that takes in a string and an anagram. The function should return the number of substrings that appear
in the string that have the same characters as the anagram.

You can assume that the anagram is not longer than the string.

#### test_00:

```js
countSubstringAnagrams("tacoctacabcatt", "cat"); // -> 4
// the 4 substrings that are an anagram of "cat" are:
//  - tac
//  - cta
//  - tac
//  - cat
```

#### test_01:

```js
countSubstringAnagrams("qtqt", "qt"); // -> 3
```

#### test_02:

```js
countSubstringAnagrams("gattactat", "att"); // -> 3
```

#### test_03:

```js
countSubstringAnagrams("gattactat", "tag"); // -> 1
```

#### test_04:

```js
countSubstringAnagrams("rreeadreaerrand", "reade"); // -> 4
```

#### test_05:

```js
countSubstringAnagrams("versorevairlg", "serve"); // -> 0
```
