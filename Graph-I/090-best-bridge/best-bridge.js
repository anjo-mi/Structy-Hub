const loc = (r,c) => r + ',' + c;
const coords = (l) => l.split(',').map(Number);

const getConnections = (r,c,grid, v = new Set()) =>{
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
  return v;
}

const findBridge = (r, c, grid, set) => {
  const l = loc(r,c);
  const queue = [{l, dist: -1}];
  const v = new Set();
  while (queue.length){
    const curr = queue.shift();
    const {l,dist} = curr;
    if (v.has(l)) continue;
    v.add(l);
    if (set.has(l)) return dist;
    const [r,c] = coords(l);
    if (r-1 >= 0) queue.push({
      l: loc(r-1,c),
      dist: dist+ 1,
    })
    if (r+1 < grid.length) queue.push({
      l: loc(r+1,c),
      dist: dist+ 1,
    })
    if (c-1 >= 0) queue.push({
      l: loc(r,c-1),
      dist: dist+ 1,
    })
    if (c+1 < grid[r].length) queue.push({
      l: loc(r,c+1),
      dist: dist+ 1,
    })
    
  }
}

const bestBridge = (grid) => {
  const islands = [];
  for (let r = 0 ; r < grid.length ; r++){
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] === 'L'){
        if ( islands.some( set => set.has( loc(r,c) ) ) ) continue;
        const isle = getConnections(r,c,grid);
        islands.push(isle);
      }
    }
  }
  const [a,b] = islands;
  const bridges = [];
  for (const loc of a){
    const [r,c] = coords(loc);
    bridges.push(
      findBridge(r,c,grid,b)
    )
  }
  return Math.min(...bridges);
};
/*

*/
const grid = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
console.log(bestBridge(grid),1);
const gri = [
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W", "W", "W", "L"],
];
// console.log(bestBridge(gri),8);

module.exports = {
  bestBridge,
};
