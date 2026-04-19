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

module.exports = {
  allTrips,
};
