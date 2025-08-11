const getSems = (cls, curriculum, sems) => {
  if (cls in sems) return sems[cls];
  if (!curriculum[cls].length) sems[cls] = 1;
  else{
    const times = curriculum[cls].map(pr => getSems(pr,curriculum,sems));
    sems[cls] = Math.max(...times) + 1;
  }
  return sems[cls];
}

const semestersRequired = (numCourses, prereqs) => {
  if (!prereqs.length) return 1;
  const curriculum = {};
  for (const [a,b] of prereqs){
    if (!curriculum[a]) curriculum[a] = [];
    if (!curriculum[b]) curriculum[b] = [];
    curriculum[b].push(a);
  }
  const sems = {};
  for (const cls in curriculum){
    getSems(cls, curriculum, sems);
  }
  return Math.max(...Object.values(sems));
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
module.exports = {
  semestersRequired,
};
