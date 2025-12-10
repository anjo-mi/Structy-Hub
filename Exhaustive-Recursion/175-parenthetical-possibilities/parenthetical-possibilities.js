const parentheticalPossibilities = (s) => {
  if (s === "") return [""];

  const { remains, chars } = getOptions(s);
  const ends = parentheticalPossibilities(remains);
  const poss = [];

  for (let char of chars){
    for (let end of ends){
      poss.push(char + end);
    }
  }
  return poss;
};

const getOptions = (s) => {
  if (s[0] === "("){
    const end = s.indexOf(")");
    const remains = s.slice(end + 1);
    const chars = s.slice(1, end).split("");
    return { remains, chars };
  }else{
    const remains = s.slice(1);
    const chars = [s[0]];
    return { remains, chars };
  }
};

console.log(parentheticalPossibilities('x(mn)yz') ,[ 'xmyz', 'xnyz' ]);
console.log(parentheticalPossibilities("(etc)(blvd)(cat)"),
[
 'ebc', 'eba', 'ebt', 'elc', 'ela',
 'elt', 'evc', 'eva', 'evt', 'edc',
 'eda', 'edt', 'tbc', 'tba', 'tbt',
 'tlc', 'tla', 'tlt', 'tvc', 'tva',
 'tvt', 'tdc', 'tda', 'tdt', 'cbc',
 'cba', 'cbt', 'clc', 'cla', 'clt',
 'cvc', 'cva', 'cvt', 'cdc', 'cda',
 'cdt'
]);
// console.log(parentheticalPossibilities("taco"), ['taco']);
/*
if !s return [s]
const allPoss = [];
let temp = {}
let curr = ''
iterate thru s
  if the char is not between () -> add to curr
  if the char is '('
  extract everything between the ()'s
  run the slicing function that gets each char in each place
    add curr + each one to temp
  curr = ''
  ensure youre taking out s.slice( (...) )
*/


module.exports = {
  parentheticalPossibilities,
};
