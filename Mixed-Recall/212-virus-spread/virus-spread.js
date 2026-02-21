const dirs = [
  [1,0], [-1,0], [0,1], [0,-1]
];

const inBounds = (r,c,grid) => grid[r]?.[c];

const checkInfected = (r,c,grid) => {
  return inBounds(r,c,grid) && grid[r][c] === 2;
}

const virusSpread = (grid, count = 0) => {
  const newGrid = [];
  let inc = 0;
  for (let r = 0 ; r < grid.length ; r++){
    const newRow = [];
    for (let c = 0 ; c < grid[r].length ; c++){
      if (grid[r][c] !== 1) {
        newRow.push(grid[r][c]);
        continue;
      }
      const cnt = dirs.reduce((a,[dr,dc]) => {
        const [nr,nc] = [dr+r,dc+c];
        const infected = checkInfected(nr,nc,grid);
        if (infected) a++;
        return a;
      }, 0)
      if (cnt) {
        newRow.push(2);
        inc++;
      }
      else newRow.push(1);
    }
    newGrid.push(newRow);
  }
  if (!inc) return newGrid.every(row => !row.includes(1)) ? count : -1;
  return virusSpread(newGrid,count+1);
};


/**
* @params 2d array
* @return number
* create dirs for lateral movement
create newGrid []
* iterate thru rows and columns of grid (make newRow[] at row loop)
* if current location is 1 vvv (otherwise push current loc to newRow)
* checkInfected = return boolean for inbounds check and r/c + dirs = 2
* if ^^^ === true, push 2 to newRow / add to increment count
* push newRow to newGrid

if !incrementCount -> return newGrid.every(row => !row.includes(1)) ? count : -1;
return virusSpread(newGrid,count+1)
*/
const grid = [
  [2,1,1,1,1,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,1,0,0],
  [0,0,0,1,1,0,1],
  [0,0,0,2,2,0,1],
  [0,0,0,0,0,0,1],
  [2,1,1,1,1,1,1]
];
console.log(virusSpread(grid), 9);


module.exports = {
  virusSpread,
};
