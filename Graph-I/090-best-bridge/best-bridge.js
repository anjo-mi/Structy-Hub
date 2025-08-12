const loc = (r,c) => r + ',' + c;
const coords = (l) => l.split(',').map(Number);
const inBounds = (r,c,grid) => r >= 0 &&
                               c >= 0 &&
                               r < grid.length &&
                               c < grid[r].length;

const getConnections = (r,c,grid,v = new Set())=> {
  if (v.has(loc(r,c)) ||
      !inBounds(r,c,grid) ||
      grid[r][c] !== 'L') return null;
  v.add(loc(r,c));

  getConnections(r+1,c,grid,v);
  getConnections(r-1,c,grid,v);
  getConnections(r,c+1,grid,v);
  getConnections(r,c-1,grid,v);

  return v;
}

const findBridge = (l,grid,b,v = new Set()) =>{
  const ds = [ [1,0] , [-1,0] , [0,1] , [0,-1] ];
  const queue = [{l, dist: -1}];
  while (queue.length){
    const {l, dist} = queue.shift();
    const [r,c] = coords(l);
    if (b.has(l)) return dist;
    if (v.has(l)) continue;
    v.add(l);
    for (const d of ds){
      const [dr,dc] = d;
      if (inBounds(r+dr,c+dc,grid)) queue.push({
        l: loc(r+dr, c+dc),
        dist: dist + 1.
      })
    }
  }
}

const bestBridge = (grid) => {
  const islands = [];
  for (let r = 0 ; r < grid.length ; r++){
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] === 'L' && !islands.some(isle => isle.has(loc(r,c)))){
        const isle = getConnections(r,c,grid);
        islands.push(isle);
      }
    }
  }
  const [a,b] = islands;
  let min = Infinity;
  for (const l of a){
    const bridge = findBridge(l,grid,b);
    if (bridge < min) min = bridge;
  }
  return min;
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
