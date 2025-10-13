const loc = (r,c) => r + ',' + c;
const coords = (l) => l.split(',').map(Number);
const inBounds = (r,c,grid) => grid[r]?.[c];

const closestCarrot = (grid, sr, sc) => {
  const q = [{l:loc(sr,sc),dist:0}];
  const v = new Set();
  while (q.length){
    const {l,dist} = q.shift();
    const [r,c] = coords(l);
    if (!inBounds(r,c,grid) ||
         grid[r][c] === 'X' || 
         v.has(l)) continue;
    v.add(l);
    if (grid[r][c] === 'C') return dist;
    q.push({l:loc(r+1,c), dist:dist+1});
    q.push({l:loc(r-1,c), dist:dist+1});
    q.push({l:loc(r,c+1), dist:dist+1});
    q.push({l:loc(r,c-1), dist:dist+1});
  }
  return -1;
};
/*

*/
const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];
console.log(closestCarrot(grid, 1, 2),4);
const grd = [
  ['O', 'O', 'X', 'X', 'X'],
  ['O', 'X', 'X', 'X', 'C'],
  ['O', 'X', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'C', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O'],
];
console.log(closestCarrot(grd, 3, 4), 9)
const gri = [
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C'],
];
console.log(closestCarrot(gri, 0, 0),-1)

module.exports = {
  closestCarrot,
};
