const l = (r,c) => r + ',' + c;

const inBounds = (r,c,grid) => grid[r]?.[c] === 'O';
// const inBounds = (r,c,grid) => c in grid[r];
                               

const countPaths = (grid, r = 0, c = 0, memo = {}) => {
  if (!inBounds(r,c,grid)) return 0;
  if (r === grid.length - 1 && c === grid[r].length - 1) return 1;
  const loc = l(r,c);
  if (loc in memo) return memo[loc];

  return memo[loc] = countPaths(grid,r+1,c,memo) + countPaths(grid,r,c+1,memo);
  // return memo[loc];
};
/*

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
