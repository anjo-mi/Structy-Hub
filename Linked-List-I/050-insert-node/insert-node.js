class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, val, i) => {
  const n = new Node(val);
  if (!i){ n.next = head; return n; }
  let c = head,
      p = null;
  while (c && i){
    p = c;
    c = c.next;
    i--;
  }
  p.next = n;
  n.next = c;
  return head;
};
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
console.log(insertNode(a, 'x', 2), a);
module.exports = {
  insertNode,
};
