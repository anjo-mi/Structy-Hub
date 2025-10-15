class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const undupeSortedLinkedList = (head) => {
  if (!head) return null;
  let prev = head,
      curr = head.next;
  while (curr){
    if (prev.val === curr.val){
      prev.next = curr.next;
      curr = curr.next;
    }else{
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
};
/*
let prev = head,
    curr = prev.next;

while (curr){
  if (prev.val === curr.val){
    prev.next = curr.next;
    curr = curr.next;
  }else{
    prev = curr;
    curr = curr.next;
  }
}
return head
p
head of a linked list of nodes (.val, .next || null)
- SORTED low -> high
r
same linked list, values only occurring once
e
empty list (return list)
1 node (return list)
non consecutive dupes (shouldnt occur, will need new strategy)
p
*/
const a = new Node(4);
const b = new Node(4);
const c = new Node(6);
const d = new Node(6);
const e = new Node(6);
const f = new Node(7);
const g = new Node(7);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
console.log(undupeSortedLinkedList(a), '4 -> 6 -> 7');

const w = new Node(5);
const x = new Node(5);
const y = new Node(5);
const z = new Node(8);
w.next = x;
x.next = y;
y.next = z;
console.log(undupeSortedLinkedList(x), '5 -> 8');

const p = new Node(10);
const q = new Node(20);
const r = new Node(30);
p.next = q;
q.next = r;
console.log(undupeSortedLinkedList(p), '10 -> 20 -> 30');

module.exports = {
  undupeSortedLinkedList,
};
