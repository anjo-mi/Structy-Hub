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

const sentence = "palms sweaty knees weak arms heavy";
const synonyms = {
  palms: ["hands", "fists"],
  heavy: ["weighty", "hefty", "burdensome"],
  weak: ["fragile", "feeble", "frail", "sickly"],
};

console.log(substituteSynonyms(sentence, synonyms),
[
  'hands sweaty knees fragile arms weighty',
  'hands sweaty knees fragile arms hefty',
  'hands sweaty knees fragile arms burdensome',
  'hands sweaty knees feeble arms weighty',
  'hands sweaty knees feeble arms hefty',
  'hands sweaty knees feeble arms burdensome',
  'hands sweaty knees frail arms weighty',
  'hands sweaty knees frail arms hefty',
  'hands sweaty knees frail arms burdensome',
  'hands sweaty knees sickly arms weighty',
  'hands sweaty knees sickly arms hefty',
  'hands sweaty knees sickly arms burdensome',
  'fists sweaty knees fragile arms weighty',
  'fists sweaty knees fragile arms hefty',
  'fists sweaty knees fragile arms burdensome',
  'fists sweaty knees feeble arms weighty',
  'fists sweaty knees feeble arms hefty',
  'fists sweaty knees feeble arms burdensome',
  'fists sweaty knees frail arms weighty',
  'fists sweaty knees frail arms hefty',
  'fists sweaty knees frail arms burdensome',
  'fists sweaty knees sickly arms weighty',
  'fists sweaty knees sickly arms hefty',
  'fists sweaty knees sickly arms burdensome'
])

module.exports = {
  substituteSynonyms,
};
