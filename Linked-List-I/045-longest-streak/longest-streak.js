class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  if (!head) return 0;
  let count = 0;
  let maxCount = 0;
  let prevEl = null;
  while(head){
    if (prevEl === head.val){
      count++;
    }else{
      count = 1;
      prevEl = head.val;
    }
    if (count > maxCount) maxCount = count;
    head = head.next;
  }
  return maxCount;
};
const a = new Node(9);
const b = new Node(9);
const c = new Node(1);
const d = new Node(9);
const e = new Node(9);
const f = new Node(9);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
console.log(longestStreak(a), 3);
module.exports = {
  longestStreak,
};
