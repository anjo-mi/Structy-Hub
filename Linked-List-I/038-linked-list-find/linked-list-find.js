class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFind = (head, target) => {
  if (!head) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next,target)
};


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
console.log(linkedListFind(a, "c"), true);
const node1 = new Node("jason");
const node2 = new Node("leneli");
node1.next = node2;
console.log(linkedListFind(node1, "jason"), true);

module.exports = {
  linkedListFind,
};
/*

*/