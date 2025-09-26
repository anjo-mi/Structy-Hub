const loc = (r,c) => r + ',' + c;
const coords = (l) => l.split(',').map(Number);
const inBounds = (r,c,grid) => grid[r]?.[c];

const getConnections = (r,c,grid, isle = new Set()) => {
  if (!inBounds(r,c,grid) ||
       grid[r][c] !== 'L' || 
       isle.has(loc(r,c))) return isle;
  isle.add(loc(r,c));

  getConnections(r+1,c,grid,isle);
  getConnections(r-1,c,grid,isle);
  getConnections(r,c+1,grid,isle);
  getConnections(r,c-1,grid,isle);

  return isle;
}

const findBridge = (l,grid,b,v=new Set()) => {
  const q = [{l,dist: -1}];
  while (q.length){
    const {l,dist} = q.shift();
    const [r,c] = coords(l);
    if (!inBounds(r,c,grid) || v.has(l)) continue;
    v.add(l);
    if (b.has(l)) return dist;
    q.push({l:loc(r-1,c), dist:dist+1});
    q.push({l:loc(r+1,c), dist:dist+1});
    q.push({l:loc(r,c-1), dist:dist+1});
    q.push({l:loc(r,c+1), dist:dist+1});
  }
  return Infinity;
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
  let best = Infinity;
  for (const l of a){
    const br = findBridge(l,grid,b);
    if (br < best) best = br;
  }
  return best;
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
console.log(bestBridge(gri),8);

module.exports = {
  bestBridge,
};
