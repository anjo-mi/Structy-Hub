const dirs = [
  [0,1],
  [0,-1],
  [1,0],
  [-1,0],
]

const loc = (r,c) => r +';'+ c;
const coords = (l) => l.split(';').map(Number);
const inBounds = (r,c,grid) => grid[r]?.[c];

const stringSearch = (grid, s) => {
  for (let r = 0 ; r < grid.length ; r++){
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] === s[0]) if (snake(r,c,0,new Set(),grid,s)) return true;
    }
  }
  return false;
};

const snake = (r,c,i,v,grid,s) =>{
  const l = loc(r,c);
  if (v.has(l)) return false;
  if (i === s.length) return true;
  if (!inBounds(r,c,grid) || grid[r][c] !== s[i]) return false;

  v.add(l);
  for (const [dr,dc] of dirs){
    if (snake(r+dr,c+dc,i+1,v,grid,s)) return true;
  }
  return false;
}


const grid = [
  ['a', 'o', 'o', 'o', 'o'],
  ['b', 'c', 'd', 'o', 'o'],
  ['c', 'f', 'e', 'o', 'o'],
  ['d', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o'],
]
console.log(stringSearch(grid, 'abcdefc'), true);

module.exports = {
  stringSearch,
};
