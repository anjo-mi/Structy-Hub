const combineIntervals = (intervals, depth = 0) => {
  if (!depth) intervals.sort((a,b) => a[0] - b[0]);
  let newInts = [];

  while (intervals.length > 1){
    if (intervals[0][1] >= intervals[1][0]){
      newInts.push([ intervals[0][0] , Math.max(intervals[0][1],intervals[1][1]) ]);
      intervals = intervals.slice(2);
    }else newInts.push(intervals.shift());
  }
  
  if (intervals.length) newInts.push(intervals.pop());
  const overlaps = newInts.length > 1 && newInts.some((int,i) =>{
    return i !== newInts.length - 1 && int[1] >= newInts[i+1][0]
  })

  return overlaps ? combineIntervals(newInts,depth+1) : newInts;
};
/*
sort intervals by the first element
newInts = [];
[ [1,4],[12,15],[3,7],[8,13] ]; ->
[ [1,4],[3,9],[8,13],[12,15] ];
for (const int of intervals){
if (int[1] >= the next int[0])
  make a new int that is currentInt[0] -> nextInt[1]
  push that to newInts
  recursively call it on newInts until every el[1] < nextEl[0]
}
p
2d Array of Number-Arrays
r
2d Array of Number-Arrays
e
(empty intervals [told wouldnt happen])
multiple separate interviews (return array needs multiple elements)
p
*/



const ints = [
  [1, 4],
  [12, 15],
  [3, 7],
  [8, 13],
];
console.log(combineIntervals(ints), [ [1, 7], [8, 15] ])
const intervals = [
  [3, 7],
  [5, 8],
  [1, 5],
];
console.log(combineIntervals(intervals), [ [1, 8] ]);
const interval = [
  [64, 70],
  [50, 55],
  [62, 65],
  [12, 50],
  [72, 300000],
];
console.log(combineIntervals(interval), [ [12, 55], [62, 70], [72, 300000] ])

module.exports = {
  combineIntervals,
};
