class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNode = (head, target) => {
  let curr = head,
      prev = null;
  if (head.val === target) return head.next;
  while (curr){
    if (curr.val === target){
      prev.next = curr.next;
      return head;
    }
    prev = curr;
    curr = curr.next;
  }
  return head;
};
/*

*/
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
console.log(removeNode(a, "c"));
const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
console.log(removeNode(x, "z"));
module.exports = {
  removeNode,
};
