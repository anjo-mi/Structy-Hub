const liningUp = (ppl, cap) => {
  if (!cap) return [[]];
  if (ppl.length < cap) return [[]];

  const person = ppl[0];
  const rest = ppl.slice(1);
  const lines = [];

  const linesWithPerson = liningUp(rest,cap-1);
  for (const line of linesWithPerson){
    for (let i = 0 ; i <= line.length ; i++){
      lines.push([...line.slice(0,i), person, ...line.slice(i)]);
    }
  }
  liningUp(rest,cap).forEach(line => lines.push(line));

  return lines.filter(line => line.length === cap);
};

/*
if ppl.length < cap return null || [] || ????
if (!ppl.length) return [[]];

extract first
assign rest
make empty array

call liningUp on rest twice
  - once with cap - 1
  - once with cap

for every result in the array of cap-1 call
  - insert first at every position
    - push to array

for every result in the array of cap call
  - push to array

return array
*/

console.log(liningUp(["anj", "aud"], 1), [   [ 'anj' ],   [ 'aud' ] ]);


console.log(liningUp(["jason", "jen", "cody", "vicky"], 3),
[ 
  [ 'jason', 'jen', 'cody' ], 
  [ 'jen', 'jason', 'cody' ], 
  [ 'jen', 'cody', 'jason' ], 
  [ 'jason', 'cody', 'jen' ], 
  [ 'cody', 'jason', 'jen' ], 
  [ 'cody', 'jen', 'jason' ], 
  [ 'jason', 'jen', 'vicky' ], 
  [ 'jen', 'jason', 'vicky' ], 
  [ 'jen', 'vicky', 'jason' ], 
  [ 'jason', 'vicky', 'jen' ], 
  [ 'vicky', 'jason', 'jen' ], 
  [ 'vicky', 'jen', 'jason' ], 
  [ 'jason', 'cody', 'vicky' ], 
  [ 'cody', 'jason', 'vicky' ], 
  [ 'cody', 'vicky', 'jason' ], 
  [ 'jason', 'vicky', 'cody' ], 
  [ 'vicky', 'jason', 'cody' ], 
  [ 'vicky', 'cody', 'jason' ], 
  [ 'jen', 'cody', 'vicky' ], 
  [ 'cody', 'jen', 'vicky' ], 
  [ 'cody', 'vicky', 'jen' ], 
  [ 'jen', 'vicky', 'cody' ], 
  [ 'vicky', 'jen', 'cody' ], 
  [ 'vicky', 'cody', 'jen' ] 
]);

module.exports = {
  liningUp,
};
