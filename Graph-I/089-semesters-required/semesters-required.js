const getDists = (cls,graph,dists) => {
  if (cls in dists) return dists[cls];
  if (!graph[cls].length) dists[cls] = 1;
  else{
    const ds = graph[cls].map(c => getDists(c,graph,dists));
    dists[cls] = Math.max(...ds) + 1;
  }
  return dists[cls];
}

const semestersRequired = (numCourses, prereqs) => {
  if (!prereqs.length) return 1;
  const graph = {};
  for (const [a,b] of prereqs){
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[b].push(a);
  }
  const dists = {};
  for (const cls in graph){
    getDists(cls, graph, dists)
  }
  return Math.max(...Object.values(dists));
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
