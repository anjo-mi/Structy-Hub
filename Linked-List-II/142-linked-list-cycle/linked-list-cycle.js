class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListCycle = (head,enc=new Set()) => {
  if (!head) return false;
  if (enc.has(head.val)) return true;
  enc.add(head.val);
  return linkedListCycle(head.next,enc);


  
  // const v = new Set();
  // let curr = head;
  // while (curr) if (v.has(curr)) return true; v.add(curr); curr = curr.next;
  // return false;
};
/*
const v = new Set();
let curr = head;
while (curr) if (v.has(curr)) return true; v.add(curr); curr = curr.next;
return false;
p
head of linked list of nodes (.val, .next || null)
r
Boolean, does the list cycle anywhere
  - any next point to a previously encountered node
e
empty or single (false)
p
*/
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
