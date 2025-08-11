const loc = (r,c) => r + ',' + c;
const inBounds = (r,c,grid) => r >= 0 &&
                               c >= 0 &&
                               r < grid.length &&
                               c < grid[r].length;

const getConnections = (r,c,grid,v, isle = new Set()) => {
  if (!inBounds(r,c,grid)) return null;
  if (isle.has(loc(r,c))) return null;
  if (grid[r][c] !== 'L') return null;
  
  isle.add(loc(r,c));
  v.add(loc(r,c));
  getConnections(r-1,c,grid,v,isle);
  getConnections(r+1,c,grid,v,isle);
  getConnections(r,c-1,grid,v,isle);
  getConnections(r,c+1,grid,v,isle);
  console.log({isle})
  return isle;
}

const minimumIsland = (grid) => {
  let min = Infinity;
  const v = new Set();
  for (let r = 0 ; r < grid.length ; r++){
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] === 'L' && !v.has(loc(r,c))){
        const isle = getConnections(r,c,grid,v);
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
