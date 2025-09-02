const loc = (r,c) => r + ',' + c;
const inBounds = (r,c,grid) => grid[r]?.[c];

const getConnections = (r,c,grid,isle = new Set()) => {
  if (!inBounds(r,c,grid) ||
      isle.has(loc(r,c)) ||
      grid[r][c] !== 'L') return isle;
  isle.add(loc(r,c));
  getConnections(r+1,c,grid,isle);
  getConnections(r-1,c,grid,isle);
  getConnections(r,c+1,grid,isle);
  getConnections(r,c-1,grid,isle);

  return isle;
}

const minimumIsland = (grid) => {
  const islands = [];
  for (let r = 0 ; r < grid.length ; r++){
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] === 'L' && !islands.some(isle => isle.has(loc(r,c)))){
        const isle = getConnections(r,c,grid);
        islands.push(isle);
      }
    }
  }
  return Math.min(...islands.map(isle => isle.size));
};
/*

*/
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];
console.log(minimumIsland(grid), 2)
const gri = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];
console.log(minimumIsland(gri), 9)

module.exports = {
  minimumIsland,
};
