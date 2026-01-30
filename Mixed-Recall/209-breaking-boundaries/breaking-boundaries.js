const inBounds = (rs,cs,r,c) => r < rs &&
                                r >= 0 &&
                                c < cs &&
                                c >= 0;
const dirs = [
  [1,0], [-1,0], [0,1], [0,-1]
];

const breakingBoundaries = (rs, cs, k, r, c,memo ={}) => {
  const key = k + ';' + r + ';' + c;
  if (key in memo) return memo[key];
  if (!inBounds(rs,cs,r,c)) return 1;
  if (!k) return inBounds(rs,cs,r,c) ? 0 : 1;
  let total = 0;
  for (const [dr,dc] of dirs){
    total += breakingBoundaries(rs,cs,k-1,r+dr,c+dc,memo);
  }
  return memo[key] = total;
};

console.log(breakingBoundaries(3, 4, 3, 0, 0), 11);

module.exports = {
  breakingBoundaries,
};
