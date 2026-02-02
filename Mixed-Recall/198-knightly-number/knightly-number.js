const inBounds = (r,c,size) => (r >= 0 && r < size) && (c >= 0 && c < size);

const moves = [
  [1,2],
  [-1,2],
  [1,-2],
  [-1,-2],
  [2,1],
  [-2,1],
  [2,-1],
  [-2,-1],
]

const knightlyNumber = (n, m, kr, kc, pr, pc,memo={}) => {
  const k = m + ';' + kr + ';' + kc;
  if (k in memo) return memo[k];
  if (!inBounds(kr,kc,n)) return 0;
  if (!m) return kr === pr && kc === pc ? 1 : 0;

  let count = 0;
  for (const [mr,mc] of moves){
    count += knightlyNumber(n,m-1,kr+mr, kc+mc,pr,pc,memo);
  }
  return memo[k] = count;
};


console.log(knightlyNumber(20, 12, 8, 3, 9, 14), 98410127);

module.exports = {
  knightlyNumber
};
