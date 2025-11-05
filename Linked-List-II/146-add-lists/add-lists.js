class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (h1, h2) => {
  let head,
      tail,
      carry = 0;
  while (h1 || h2){
    const total = (h1 ? h1.val : 0) + (h2 ? h2.val : 0) + carry;
    carry = Math.floor(total / 10);
    const dig = total % 10;
    const n = new Node(dig);
    if (!head){
      head = n;
      tail = n;
    }else{
      tail.next = n;
      tail = tail.next;
    }
    h1 = h1 ? h1.next : h1;
    h2 = h2 ? h2.next : h2;
  }
  tail.next = carry ? new Node(carry) : null;
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









