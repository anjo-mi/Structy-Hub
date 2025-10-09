class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedPalindrome = (head) => {
  const stack = [];
  let curr = head;
  while (curr){
    stack.push(curr.val);
    curr = curr.next;
  }
  const rev = stack.toReversed();
  return rev.every((el,i) => el === stack[i]);
};
/*
create a stack [];
iterate thru the list, push vals to stack
compare reversed stack to stack
p
head of a linked list (nodes with .val and .next)
r
Boolean -> are values palindromical (word?)
e
empty list (true)
no next node (true)
p
*/
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
