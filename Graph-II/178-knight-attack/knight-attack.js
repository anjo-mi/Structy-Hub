const loc = (r,c) => r + ';' + c;
const coords = (loc) => loc.split(';').map(Number);
const inBounds = (r,c,n) => r >= 0 &&
                                   c >= 0 &&
                                   c <  n &&
                                   r <  n;

const knightAttack = (n, kr, kc, pr, pc) => {
  const l = loc(kr,kc);
  const q = [{l, moves:0}];
  const seen = new Set();
  while (q.length){
    const {l,moves} = q.shift();
    const [r,c] = coords(l);
    if (!inBounds(r,c,n) || seen.has(l)) continue;
    if (r === pr && c === pc) return moves;
    seen.add(l);
    const dirs = [ [1,2] , [2,1] , [-2,1] , [-1,2] ,
                   [2,-1] , [1,-2] , [-2,-1] , [-1,-2] ];
    for (const [dr,dc] of dirs){
      q.push({l: loc(r+dr,c+dc), moves: moves+1});
    }
  }
  return null;
};


console.log(knightAttack(8, 1, 1, 2, 2), 2);
console.log(knightAttack(24, 4, 7, 19, 20), 10);
console.log(knightAttack(3, 0, 0, 1, 1), null);

module.exports = {
  knightAttack,
};
