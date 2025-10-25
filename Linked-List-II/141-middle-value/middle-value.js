class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const middleValue = (head) => {
  if (!head) return null;
  const vals = [];
  let curr = head;
  while (curr){vals.push(curr.val); curr = curr.next;};
  return vals[Math.floor(vals.length / 2)];
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(middleValue(a), 'c');
const q = new Node('q');
console.log(middleValue(q), 'q');
const x = new Node('x');
const y = new Node('y');
const z = new Node('z');
x.next = y;
y.next = z;
console.log(middleValue(x), 'y');

module.exports = {
  middleValue,
};
