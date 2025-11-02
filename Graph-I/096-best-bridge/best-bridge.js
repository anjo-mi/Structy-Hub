const loc = (r,c) => r + ',' + c;
const coords = (l) => l.split(',').map(Number);
const inBounds = (r,c,grid) => grid[r]?.[c];

const getConnections = (r,c,grid,isle=new Set()) => {
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

const findBridge = (parcel,grid,b,br = new Set()) => {
  const q = [{parcel,dist:-1}];
  while (q.length){
    const {parcel,dist} = q.shift();
    const [r,c] = coords(parcel);
    if (!inBounds(r,c,grid) || br.has(parcel)) continue;
    if (b.has(parcel)) return dist;
    br.add(parcel);
    q.push({parcel:loc(r,c+1), dist:dist+1});
    q.push({parcel:loc(r,c-1), dist:dist+1});
    q.push({parcel:loc(r+1,c), dist:dist+1});
    q.push({parcel:loc(r-1,c), dist:dist+1});
  }
  return Infinity;
}

const bestBridge = (grid) => {
  const islands = [];
  for (let r = 0 ; r < grid.length ; r++){
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] === 'L' && !islands.some(isle => isle.has(loc(r,c)))){
        isle = getConnections(r,c,grid);
        islands.push(isle);
      }
    }
  }

  const [a,b] = islands;
  let best = Infinity;
  for (const parcel of a){
    const br = findBridge(parcel,grid,b);
    if (br < best) best = br;
  }
  return isFinite(best) ? best : -1;
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
