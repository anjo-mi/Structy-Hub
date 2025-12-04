## grocery budget

Write a function, _groceryBudget_, that takes in _groceryList_ and a number _budget_. Every item in
_groceryList_ is a pair containing the item name and price. Your function should return all possible
ways to purchase items without spending more than the given budget.

The order of the items in the return value does not matter.

You cannot purchase an item more than once. You do not have to spend the budget fully.


#### test_00:

```js
groceryBudget([  
  ['eggs', 5],
  ['milk', 3],
  ['butter', 3],
], 7); // ->
// [ 
//   [ 'eggs' ], 
//   [ 'butter', 'milk' ], 
//   [ 'milk' ], 
//   [ 'butter' ], 
//   [] 
// ] 
```

#### test_01:

```js
groceryBudget([  
  ['eggs', 5],
  ['milk', 3],
  ['butter', 3],
], 20); // ->
// [ 
//   [ 'butter', 'milk', 'eggs' ], 
//   [ 'milk', 'eggs' ], 
//   [ 'butter', 'eggs' ], 
//   [ 'eggs' ], 
//   [ 'butter', 'milk' ], 
//   [ 'milk' ], 
//   [ 'butter' ], 
//   [] 
// ] 
```

#### test_02:

```js
groceryBudget([  
  ['eggs', 5],
  ['milk', 3],
  ['butter', 3],
  ['garlic', 1],
], 7); // ->
// [ 
//   [ 'garlic', 'eggs' ], 
//   [ 'eggs' ], 
//   [ 'garlic', 'butter', 'milk' ], 
//   [ 'butter', 'milk' ], 
//   [ 'garlic', 'milk' ], 
//   [ 'milk' ], 
//   [ 'garlic', 'butter' ], 
//   [ 'butter' ], 
//   [ 'garlic' ], 
//   [] 
// ] 
```

#### test_03:

```js
groceryBudget([  
  ['salt', 1],
  ['apples', 5],
  ['tofu', 7],
  ['chicken', 4],
  ['salmon', 10],
], 9); // ->
// [ 
//   [ 'salt', 'apples' ], 
//   [ 'chicken', 'apples' ], 
//   [ 'apples' ], 
//   [ 'salt', 'tofu' ], 
//   [ 'tofu' ], 
//   [ 'chicken', 'salt' ], 
//   [ 'salt' ], 
//   [ 'chicken' ], 
//   [] 
// ] 
```

#### test_04:

```js
groceryBudget([  
  ['apples', 5],
  ['tofu', 7],
  ['salt', 1],
  ['chicken', 4],
  ['salmon', 10],
  ['thyme', 2]
], 12); // ->
// [ 
//   [ 'tofu', 'apples' ], 
//   [ 'thyme', 'chicken', 'salt', 'apples' ], 
//   [ 'chicken', 'salt', 'apples' ], 
//   [ 'thyme', 'salt', 'apples' ], 
//   [ 'salt', 'apples' ], 
//   [ 'thyme', 'chicken', 'apples' ], 
//   [ 'chicken', 'apples' ], 
//   [ 'thyme', 'apples' ], 
//   [ 'apples' ], 
//   [ 'chicken', 'salt', 'tofu' ], 
//   [ 'thyme', 'salt', 'tofu' ], 
//   [ 'salt', 'tofu' ], 
//   [ 'chicken', 'tofu' ], 
//   [ 'thyme', 'tofu' ], 
//   [ 'tofu' ], 
//   [ 'thyme', 'chicken', 'salt' ], 
//   [ 'chicken', 'salt' ], 
//   [ 'salmon', 'salt' ], 
//   [ 'thyme', 'salt' ], 
//   [ 'salt' ], 
//   [ 'thyme', 'chicken' ], 
//   [ 'chicken' ], 
//   [ 'thyme', 'salmon' ], 
//   [ 'salmon' ], 
//   [ 'thyme' ], 
//   [] 
// ] 
```
