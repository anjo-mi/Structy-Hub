const inBounds = (r,c,grid) => r >= 0 &&
                               r < grid.length &&
                               c >= 0 && 
                               c < grid[r].length;
const loc = (r,c) => r + ';' + c;
const coords = loc => loc.split(';').map(Number);

const findMinDist = (r,c,grid,tr,tc) => {
  const q = [{l:loc(r,c), dist: 0}];
  const v = new Set();
  while (q.length){
    const {l,dist} = q.shift();
    const [nr,nc] = coords(l);
    if (nr === tr && nc === tc) return dist;
    if (v.has(l) || !inBounds(nr,nc,grid) || grid[nr][nc] === 1 || grid[nr][nc] === 2) continue;
    v.add(l);
    q.push({l:loc(nr+1,nc), dist: dist + 1});
    q.push({l:loc(nr-1,nc), dist: dist + 1});
    q.push({l:loc(nr,nc+1), dist: dist + 1});
    q.push({l:loc(nr,nc-1), dist: dist + 1});
  }
  return Infinity;
}

const bestHouseBuild = (grid) => {
  const houses = [];
  for (let r = 0 ; r < grid.length ; r++){
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] === 1) houses.push([r,c]);
    }
  }
  let overallMin = Infinity;
  for (let r = 0 ; r < grid.length ; r++){
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] === 0){
        let locationMin = 0;
        for (const [hr,hc] of houses) locationMin += findMinDist(r,c,grid,hr,hc);
        overallMin = Math.min(overallMin,locationMin);
      }
    }
  }
  return isFinite(overallMin) ? overallMin : -1;
};

const grid = [
  [1,0,0,0,1],
  [0,0,0,0,0],
  [0,0,1,0,0]
];
console.log(bestHouseBuild(grid), 6);
const gri = [
  [1,0,2,0,1],
  [0,0,0,0,0],
  [0,0,1,0,0]
];
console.log(bestHouseBuild(gri), 7);

/*
iterate thru grid
  push any 1 to a houses array [r,c];

make a function that finds the minimum distance to a location that is 1
  - when we find it, remove it from the array, add location to another set
  - when all locations are found, check to make sure all houses are encountered

*/

module.exports = {
  bestHouseBuild,
};
