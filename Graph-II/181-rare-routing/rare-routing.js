const rareRouting = (n, roads) => {
  if (!roads.length) return false;
  const paths = {};
  for (const [a,b] of roads){
    if (!paths[a]) paths[a] = [];
    if (!paths[b]) paths[b] = [];
    paths[a].push(b);
    paths[b].push(a);
  }

  for (let i = 0 ; i < n ; i++){
    if (!(i in paths)) return false;
    const s = [ {city:i, path: new Set(), prev: null} ];
    let p;
    while (s.length){
      const {city,path,prev} = s.pop();
      if (path.has(city)) return false;
      path.add(city);
      for (const dst of paths[city]) if (dst !== prev) {
        s.push({city:dst, path, prev: city});
      }
      p = path;
    }
    if (p.size !== n) return false;
  }
  return true;
};

/*
make a paths {}
iterate thru roads to make an adjacency list

iterate thru the paths 'cities'
make a stack with [{city, route : new Set()}]
extract city / route
if route has city return false
add the city to the route
for every path from that city, push the destination and route to the stack

save previous 'city' somewhere


after loop:
return true
*/
console.log(rareRouting(4, [
  [0, 1],
  [0, 2],
  [0, 3]
]), true);
console.log(rareRouting(4, [
  [0, 1],
  [3, 2],
]), false);
console.log(rareRouting(4, [
  [0, 1],
  [0, 2],
  [0, 3],
  [3, 2]
]), false);
console.log(rareRouting(4, [
  [0, 1],
  [0, 2],
  [1, 2]
]), false);
console.log(rareRouting(4, []), false);
module.exports = {
  rareRouting,
};
