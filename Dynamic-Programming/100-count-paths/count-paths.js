const l = (r,c) => r + ',' + c;

const inBounds = (r,c,grid) => grid[r]?.[c] === 'O';
// const inBounds = (r,c,grid) => c in grid[r];
                               

const countPaths = (grid, r = 0, c = 0, memo = {}) => {
  if (!inBounds(r,c,grid)) return 0;
  const loc = l(r,c);
  if (r === grid.length - 1 && c === grid[r].length - 1) memo[loc] = 1;
  if (loc in memo) return memo[loc];

  memo[loc] = countPaths(grid,r+1,c,memo) + countPaths(grid,r,c+1,memo);
  return memo[loc];
};
/*
pseudo
add a memo object to parameters
make an inBounds function for (r,c,grid)
make a location function for r and c
if (r === grid.length && c === grid[r].length) memo[location] = 1
if location in memo return memo[location]
memo[location] = countPaths(grid, r+1, c+1, memo)
return memo[location]
p
2d grid of Strings 'X' and 'O'
r
Number -> total number of different paths from top-left to bottom-right
e
blocked by x's, return 0

*/
const grid = [
  ["O", "O"],
  ["O", "O"],
];
console.log(countPaths(grid), 2);
const gri = [
  ["O", "O", "O"],
  ["O", "O", "X"],
  ["O", "O", "O"],
];
console.log(countPaths(gri), 3);
const grd = [
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["O", "O", "O"],
];
console.log(countPaths(grd), 1);
const gid = [
  ["O", "O", "X", "O", "O", "O"],
  ["O", "O", "X", "O", "O", "O"],
  ["X", "O", "X", "O", "O", "O"],
  ["X", "X", "X", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O"],
];
console.log(countPaths(gid), 0);
module.exports = {
  countPaths,
};
