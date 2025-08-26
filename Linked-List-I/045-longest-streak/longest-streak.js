class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head, strk = 0, val = null, l = 0) => {
  if (!head) return l;
  if (head.val === val){
    strk++;
    if (strk > l) l = strk;
    return longestStreak(head.next,strk,val,l);
  }
  val = head.val;
  strk = 1;
  if (strk > l) l = strk;
  return longestStreak(head.next,strk,val,l);
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
