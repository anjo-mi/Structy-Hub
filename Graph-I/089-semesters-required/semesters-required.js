const getMinReqClasses = (cls,crlm,allClassPreReqs) => {
  if (!crlm[cls].length) allClassPreReqs[cls] = 1;
  if (cls in allClassPreReqs) return allClassPreReqs[cls];
  const allPreReqTimes = crlm[cls].map(cl => getMinReqClasses(cl,crlm,allClassPreReqs));
  allClassPreReqs[cls] = Math.max(...allPreReqTimes) + 1;
  return allClassPreReqs[cls];
}

const semestersRequired = (numCourses, prereqs) => {
  if (!prereqs.length) return 1;
  const crlm = {};
  for (const [a,b] of prereqs){
    if (!crlm[a]) crlm[a] = [];
    if (!crlm[b]) crlm[b] = [];
    crlm[b].push(a);
  }
  const allClassPreReqs = {};
  for (const cls in crlm){
    getMinReqClasses(cls,crlm,allClassPreReqs);
  }
  return Math.max(...Object.values(allClassPreReqs));
};




/*
p
Number -> total num of courses, prereqs as 2d array of tuples [Numbers]
r
Number, total times you have to traverse array,
can only complete second item, after first item is completed
e
SAFE TO ASSUME: all courses can be completed
p
make graph, store distances
*/

const numCourses = 6;
const prereq = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
console.log(semestersRequired(numCourses, prereq), 3);
const numCourse = 7;
const prereqs = [
  [4, 3],
  [3, 2],
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6],
];
console.log(semestersRequired(numCourse, prereqs), 5);
const umCourses = 12;
const rereqs = [];
semestersRequired(umCourses, rereqs);
module.exports = {
  semestersRequired,
};
