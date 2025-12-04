const groceryBudget = (list, budget) => {
  if (!list.length) return [[]];
  if (budget < 0) return [];

  const [first,price] = list[0];
  const rest = list.slice(1);
  const possCombos = [];

  const wItem = groceryBudget(rest,budget - price);
  wItem.forEach(l => {
    if (budget - price >= 0){
      l.push(first);
      possCombos.push(l);
    }
  })
  const woItem = groceryBudget(rest,budget);
  woItem.forEach(l => possCombos.push(l));

  return possCombos;
};

console.log(groceryBudget([  
  ['eggs', 5],
  ['milk', 3],
  ['butter', 3],
  ['garlic', 1],
], 7));

console.log(groceryBudget([  
  ['eggs', 5],
  ['milk', 3],
  ['butter', 3],
], 7));

console.log(groceryBudget([  
  ['eggs', 5],
  ['milk', 3],
  ['butter', 3],
], 20));

console.log(groceryBudget([  
  ['salt', 1],
  ['apples', 5],
  ['tofu', 7],
  ['chicken', 4],
  ['salmon', 10],
], 9));




module.exports = {
  groceryBudget,
};
