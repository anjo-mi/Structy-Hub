class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverseList = (head) => {
  let prev = null,
      curr = head;
  while (curr){
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
console.log(reverseList(a));
const x = new Node("x");
const y = new Node("y");
x.next = y;
console.log(reverseList(x));
const p = new Node("p");
console.log(reverseList(p));
module.exports = {
  reverseList,
};
