class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListCycle = (head) => {
  const set = new Set();

  let curr = head;
  while (curr){
    if (set.has(curr.val)) return true;
    set.add(curr.val);
    curr = curr.next;
  }
  return false;
};
// q -> r -> s -> t -> u -> v -> w -> x -> y -> s
// 12
//      1    2
//           1         2
//                1              2
//                     1                   2
//                2         1
//                          2    1
//                                    12 // true!!!!!!
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
a.next = b;
b.next = c;
c.next = d;
d.next = b;
console.log(linkedListCycle(a), true);

const f = new Node('f');
const g = new Node('g');
const h = new Node('h');
const i = new Node('i');
f.next = g;
g.next = h;
h.next = i;
console.log(linkedListCycle(f), false);

const p = new Node('p');
console.log(linkedListCycle(p), false);


module.exports = {
  linkedListCycle,
};
