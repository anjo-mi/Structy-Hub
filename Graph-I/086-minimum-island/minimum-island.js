const loc = (r,c) => r + ',' + c;
const inBounds = (r,c,grid) => r >= 0 &&
                               c >= 0 &&
                               r < grid.length &&
                               c < grid[r].length;

const getConnections = (r,c,grid,v, isle = new Set()) => {
  if (!inBounds(r,c,grid) ||
      grid[r][c] !== 'L' || 
      v.has(loc(r,c))) return isle;
  v.add(loc(r,c));
  isle.add(loc(r,c));
  getConnections(r+1,c,grid,v,isle);
  getConnections(r-1,c,grid,v,isle);
  getConnections(r,c+1,grid,v,isle);
  getConnections(r,c-1,grid,v,isle);
  return isle;
}

const minimumIsland = (grid) => {
  const v = new Set();
  let min = Infinity;
  for (let r = 0 ; r < grid.length ; r++){
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] === 'L'){
        const isle = getConnections(r,c,grid,v);
        if (isle.size && isle.size < min) min = isle.size;
      }
    }
  }
  return min;
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
