class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const addLists = (h1, h2) => {
  let c1 = h1,
      c2 = h2;
  let carryOver = 0;
  let head = null;
  let tail = null;
  while (c1 || c2){
    const l1item = c1 ? c1.val : 0;
    const l2item = c2 ? c2.val : 0;
    const nextTotal = l1item + l2item + carryOver;
    const nextDigit = nextTotal % 10;
    const overTen = Math.floor(nextTotal / 10);
    carryOver = overTen;
    const n = new Node(nextDigit);
    if (!head) {
      head = n;
      tail = n;
    }else {
      tail.next = n;
      tail = n;
    }
    if (c1) c1 = c1.next;
    if (c2) c2 = c2.next;
  }
  if (carryOver) tail.next = new Node(carryOver);
  return head;
};
/*
set current variables (c1 / c2)
while either is not null
const l1item = c1.val || 0
const l2item = c2.val || 0
if (carryOver) add it to the node val
make a node for the remainder of l1item + l2item % 10
queue that to the new list
carry over Math.floor((l1item + l2item) / 10)
(save new list's tails each time)
*/


const a1 = new Node(9);
const a2 = new Node(9);
const a3 = new Node(9);
a1.next = a2;
a2.next = a3;
const b1 = new Node(6);

console.log(addLists(a1, b1), '5 -> 0 -> 0 -> 1');

module.exports = {
  addLists,
};









