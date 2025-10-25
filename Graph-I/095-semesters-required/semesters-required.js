const getSems = (cls,crlm,sems) => {
  if (cls in sems) return sems[cls];
  if (!crlm[cls].length) return 1;

  const allSems = crlm[cls].map(cl => getSems(cl,crlm,sems) + 1);

  return sems[cls] = Math.max(...allSems);
}

const semestersRequired = (numCourses, prereqs) => {
  if (!prereqs.length) return 1;
  const crlm = {};
  for (const [a,b] of prereqs){
    if (!crlm[a]) crlm[a] = [];
    if (!crlm[b]) crlm[b] = [];
    crlm[b].push(a);
  }

  const sems = {};
  for (const cls in crlm){
    getSems(cls,crlm,sems);
  }
  return Math.max(...Object.values(sems))
};


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
