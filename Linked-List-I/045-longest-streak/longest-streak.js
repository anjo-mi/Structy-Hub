class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  let curr = head,
      temp = null,
      strk = 0,
      mxst = 0;
  while (curr){
    if (curr.val === temp){
      strk++;
      if (strk > mxst) mxst = strk;
    }else{
      strk = 1;
      temp = curr.val;
    }
    curr = curr.next;
  }
  if (strk > mxst) mxst = strk;
  return mxst;
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
