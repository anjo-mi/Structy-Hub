class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (h1, h2) => {
  let c1 = h1,
      c2 = h2,
      carry = 0;
  let head = null,
      tail = null;
  while (c1 || c2){
    const nextTotal = (c1 ? c1.val : 0) + (c2 ? c2.val : 0) + carry;
    carry = Math.floor(nextTotal / 10);
    const n = new Node(nextTotal % 10);
    if (!head){
      head = n;
      tail = n;
    }else {
      tail.next = n;
      tail = tail.next;
    }
    if (c1) c1 = c1.next;
    if (c2) c2 = c2.next;
  }
  if (carry) tail.next = new Node(carry);
  return head;
};

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









