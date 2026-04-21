const buildRoutes = (tolls) => {
  const routes = {};
  for (const [a,b,c] of tolls){
    if (!(a in routes)) routes[a] = {};
    if (!(b in routes)) routes[b] = {};
    routes[a][b] = c;
    routes[b][a] = c;
  }
  return routes;
}

const findMin = (routes,a,b,v = new Set()) => {
  if (a === b) return 0;
  if (v.has(a)) return Infinity;
  v.add(a);
  let min = Infinity;
  for (const child in routes[a]){
    const cost = routes[a][child];
    min = Math.min(
      min,
      cost + findMin(routes,child,b,v)
    );
  }
  v.delete(a);
  return min;
}

const lowestToll = (tolls, start, end) => {
  const routes = buildRoutes(tolls);
  return +findMin(routes,start,end).toFixed(1);
};

module.exports = {
  lowestToll,
};
