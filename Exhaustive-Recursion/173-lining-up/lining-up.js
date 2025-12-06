const liningUp = (arr, k) => {
  if (arr.length < k) return [[]];
  if (!k) return [[]]

  const res = [];
  const first = arr[0];
  const rest = arr.slice(1);
  const slc = liningUp(rest,k-1);

  for (const list of slc){
    for (let i = 0 ; i <= list.length ; i++){
      res.push([...list.slice(0,i), first, ...list.slice(i)])
    }
  }
  
  for (const list of liningUp(rest,k)) res.push(list);

  return res.filter(el => el.length === k);
};

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
