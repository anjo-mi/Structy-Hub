const getTimes = (cls,crlm,times) => {
  if (!crlm[cls].length) return 1;
  if (cls in times) return times[cls];

  const sems = crlm[cls].map(cl => getTimes(cl,crlm,times));
  times[cls] = Math.max(...sems) + 1;
  return times[cls];
}

const semestersRequired = (numCourses, prereqs) => {
  if (!prereqs.length) return 1;
  const crlm = {};
  for (const [a,b] of prereqs){
    if (!crlm[a]) crlm[a] = [];
    if (!crlm[b]) crlm[b] = [];
    crlm[b].push(a);
  }

  const times = {};
  for (const cls in crlm){
    getTimes(cls,crlm,times);
  }

  return Math.max(...Object.values(times));
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
