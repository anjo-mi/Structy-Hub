class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, i) => {
  if (!head) return null;
  if (!i) return head.val;
  return getNodeValue(head.next, --i);
};
const node1 = new Node("banana");
const node2 = new Node("mango");
node1.next = node2;
console.log(getNodeValue(node1, 0), 'banana');
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
console.log(getNodeValue(a, 7), null);
module.exports = {
  getNodeValue,
};
