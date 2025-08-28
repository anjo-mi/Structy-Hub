class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, val, i) => {
  const n = new Node(val);
  if (!i) {
    n.next = head;
    return n;
  }
  let prev = null,
      curr = head;
  while (curr && i){
    prev = curr;
    curr = curr.next;
    i--;
  }
  prev.next = n;
  n.next = curr;
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
