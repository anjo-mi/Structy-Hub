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
  while (h1 || h2 || carry){
    let v1 = h1 ? h1.val : 0;
    let v2 = h2 ? h2.val : 0;
    const total = v1 + v2 + (carry || 0);
    const dig = total % 10;
    carry = Math.floor(total / 10);
    const n = new Node(dig);
    if (!head){
      head = n;
      tail = n;
    }else{
      tail.next = n;
      tail = tail.next;
    }
    if (h1) h1 = h1.next;
    if (h2) h2 = h2.next;
  }
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









