const subsets = (elms) => {
  if (!elms.length) return [[]];
  const first = elms[0];
  const subsWithout = subsets(elms.slice(1));
  const subsWith = subsWithout.map(sub => [first,...sub]);
  return [...subsWith, ...subsWithout];
};

module.exports = {
  subsets,
};