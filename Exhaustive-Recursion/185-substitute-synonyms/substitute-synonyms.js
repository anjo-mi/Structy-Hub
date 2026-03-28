const insertMatches = (s,syns) => {
  if (!s.length) return [[]];

  const first = s[0];
  const remains = insertMatches(s.slice(1),syns);
  const alts = [];
  if (first in syns){
    for (const alt of syns[first]) alts.push(...remains.map(rem => [alt,...rem]));
    return alts;
  }
  else return remains.map(rem => [first,...rem]);
}

const substituteSynonyms = (s, syns) => {
  s = s.split(' ');
  const res = insertMatches(s,syns);
  return res.map(phrase => phrase.join(' '));
};

module.exports = {
  substituteSynonyms,
};
