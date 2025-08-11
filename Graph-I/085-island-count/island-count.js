const loc = (r,c) => r + ',' + c;

const getConnections = (r,c,grid,v) => {
  if (r < 0 ||
      c < 0 ||
      r >= grid.length ||
      c >= grid[r].length ||
      grid[r][c] !== 'L' ||
      v.has(loc(r,c))) return null;
  
  v.add(loc(r,c));

  getConnections(r-1,c,grid,v);
  getConnections(r+1,c,grid,v);
  getConnections(r,c-1,grid,v);
  getConnections(r,c+1,grid,v);
}

const islandCount = (grid) => {
  const v = new Set();
  let islands = 0;
  for (let r = 0 ; r < grid.length ; r++){
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] === 'L' && !v.has(loc(r,c))){
        getConnections(r,c,grid,v);
        islands++;
      }
    }
  }
  return islands;
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
// console.log(islandCount(grid), 3)
const gri = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];
console.log(islandCount(gri), 4)
const grd = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];
// console.log(islandCount(grd), 1)
module.exports = {
  islandCount,
};
