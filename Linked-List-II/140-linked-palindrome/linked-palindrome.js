class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedPalindrome = (head) => {
  const arr = [];
  let curr = head;
  while (curr){
    arr.push(curr.val);
    curr = curr.next;
  }
  for (let i = 0, j = arr.length - 1 ; i <= j ; i++, j--){
    if (arr[i] !== arr[j]) return false;
  }
  return true;
};

console.log(linkedPalindrome(null), true);
const x = new Node(5);
console.log(linkedPalindrome(x), true);
const a = new Node(0);
const b = new Node(1);
const c = new Node(0);
const d = new Node(1);
const e = new Node(0);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(linkedPalindrome(a), true);
const v = new Node(3);
const f = new Node(2);
const g = new Node(4);
v.next = f;
f.next = g;
console.log(linkedPalindrome(v), false);

module.exports = {
  linkedPalindrome,
};
