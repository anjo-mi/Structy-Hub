class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (h1, h2) => {
  let head = null,
      tail = null,
      carry = 0;
  while (h1 || h2){
    const total = (h1 ? h1.val : 0) + (h2 ? h2.val : 0) + (carry || 0);
    carry = Math.floor(total / 10);
    const dig = new Node(total % 10);
    if (!head) {
      head = dig;
      tail = dig;
    }
    else{
      tail.next = dig;
      tail = tail.next;
    }
    if (h1) h1 = h1.next;
    if (h2) h2 = h2.next;
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









