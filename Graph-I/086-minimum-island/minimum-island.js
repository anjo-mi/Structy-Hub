const loc = (r,c) => r + ',' + c;
const inBounds = (r,c,grid) => r >= 0 &&
                               c >= 0 &&
                               r < grid.length &&
                               c < grid[r].length;

const getConnections = (r,c,grid,isle = new Set())=>{
  if (!inBounds(r,c,grid) || 
      grid[r][c] !== 'L' || 
      isle.has(loc(r,c))) return null;
  isle.add(loc(r,c));
  getConnections(r-1,c,grid,isle);
  getConnections(r+1,c,grid,isle);
  getConnections(r,c-1,grid,isle);
  getConnections(r,c+1,grid,isle);
  return isle;
}

const minimumIsland = (grid) => {
  let min = Infinity;
  for (let r = 0 ; r < grid.length ; r++){
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] === 'L'){
        const isle = getConnections(r,c,grid);
        if (isle.size < min) min = isle.size;
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
