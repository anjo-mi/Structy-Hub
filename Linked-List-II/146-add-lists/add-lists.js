class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (h1, h2) => {
  let carry = 0,
      head,
      tail;
  while (h1 || h2){
    const a = h1 ? h1.val : 0;
    const b = h2 ? h2.val : 0;
    const dig = (a + b + carry) % 10;
    carry = Math.floor((a + b + carry) / 10);
    const n = new Node(dig);
    if (!head){
      head = n;
      tail = n;
    }else {
      tail.next = n;
      tail = tail.next;
    }
    if (h1) h1 = h1.next;
    if (h2) h2 = h2.next;
  }
  if (carry) tail.next = new Node(carry)
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









