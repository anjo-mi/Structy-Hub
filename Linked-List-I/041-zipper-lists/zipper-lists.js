class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const zipperLists = (h1, h2) => {
  const head = h1;
  let curr = head,
      c1 = curr.next,
      c2 = h2,
      count = 0;
  while (c1 && c2){
    if (count % 2){
      curr.next = c1;
      c1 = c1.next;
    }else{
      curr.next = c2;
      c2 = c2.next;
    }
    curr = curr.next;
    count++;
  }
  return head;
};
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
console.log(zipperLists(a, x));
const s = new Node("s");
const t = new Node("t");
s.next = t;
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
console.log(zipperLists(s, one));
module.exports = {
  zipperLists,
};
