const tolerantTeams = (rivals) => {
  if (!rivals.length) return true;
  const issues = {};
  for (const [a,b] of rivals){
    if (!(a in issues)) issues[a] = [];
    if (!(b in issues)) issues[b] = [];
    issues[a].push(b);
    issues[b].push(a);
  }

  const teams = {};
  let team = true;
  for (const player in issues){
    if (player in teams) continue;
    const q = [{player , team}];
    while (q.length){
      const {player,team} = q.shift();
      if (player in teams && teams[player] !== team) return false;
      if (player in teams) continue;
      teams[player] = team;
      for (const rival of issues[player]){
        if (rival in teams && teams[rival] === team) return false;
        q.push( { player: rival , team: team ? false : true } );
      }
    }
  }
  return true;
};

/*
make a graph of []'s -> representing:
  PROP - [rival0, ... , rivalN]

iterate thru nodes,
make a q,
if the curr is in the object with a different Boolean -> return false
first node is true
  - all rivals are false
repeat for all nodes

return true
*/

console.log(tolerantTeams([
  ['philip', 'seb'],
  ['raj', 'nader']
]), true);
console.log(tolerantTeams([
  ['alan', 'jj'],
  ['jj', 'richard'],
  ['betty', 'richard'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]), true);
console.log(tolerantTeams([
  ['philip', 'seb'],
  ['raj', 'nader'],
  ['raj', 'philip'],
  ['seb', 'raj']
]), false);
console.log(tolerantTeams([
  ['alan', 'jj'],
  ['betty', 'richard'],
  ['betty', 'christine'],
  ['jj', 'simcha'],
  ['richard', 'christine']
]), false);

module.exports = {
  tolerantTeams,
};
