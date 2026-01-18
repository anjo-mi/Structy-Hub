const mapTrips = (rts) => {
  const trips = {};
  for (const [a,b] of rts){
    if (!trips[a]) trips[a] = [];
    if (!trips[b]) trips[b] = [];
    trips[a].push(b);
  }
  return trips;
}

const allTrips = (rts, start, end) => {
  const trips = mapTrips(rts);
  const paths = [];
  const q = [{loc: start, prev: null, path:[start]}];
  while (q.length){
    const {loc,prev,path} = q.shift();
    if (loc === end) paths.push(path);
    if (loc === end || loc === prev) continue;
    for (const stop of trips[loc]){
      q.push( { loc:stop, prev:loc, path:path.concat([stop]) } )
    }
  }
  return paths;
};
const routes = [
  ["brookdale", "denton junction"],
  ["astor place", "brookdale"],
  ["astor place", "cony island"],
  ["astor place", "denton junction"],
  ["cony island", "denton junction"],
];
// console.log(allTrips(routes, "cony island", "brookdale"), []);

const rts = [
  ["arlington", "boerum"],
  ["boerum", "central"],
  ["central", "euclid"],
  ["euclid", "fairfax"],
  ["arlington", "dyckman"],
  ["boerum", "euclid"],
  ["dyckman", "boerum"],
  ["dyckman", "fairfax"],
];
console.log(allTrips(rts, "arlington", "fairfax"),
[
  ['arlington', 'boerum', 'central', 'euclid', 'fairfax'],
  ['arlington', 'boerum', 'euclid', 'fairfax'],
  ['arlington', 'dyckman', 'boerum', 'central', 'euclid', 'fairfax'],
  ['arlington', 'dyckman', 'boerum', 'euclid', 'fairfax'],
  ['arlington', 'dyckman', 'fairfax']
])

module.exports = {
  allTrips,
};
