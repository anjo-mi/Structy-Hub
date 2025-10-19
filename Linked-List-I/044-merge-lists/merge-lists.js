class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (h1, h2) => {
  const head = h1.val < h2.val ? h1 : h2;
  let curr = head,
      c1 = curr.next,
      c2 = curr === h1 ? h2 : h1;
  while (c1 && c2){
    const next = c1.val < c2.val ? c1 : c2;
    curr.next = next;
    curr = next;
    if (next === c1) c1 = c1.next;
    if (next === c2) c2 = c2.next;
  }
  if (c1 || c2) curr.next = c1 || c2;
  return head;
};
const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
const q = new Node(1);
const r = new Node(8);
const s = new Node(9);
const t = new Node(10);
q.next = r;
r.next = s;
s.next = t;
console.log(mergeLists(a, q),'1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28');

module.exports = {
  mergeLists,
};

/*

*/