class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (vals) => {
  if (!vals.length) return null;
  const head = new Node(vals.shift());
  let curr = head,
      i = 0;
  while (i < vals.length){
    curr.next = new Node(vals[i]);
    curr = curr.next;
    i++;
  }
  return head;
};
/*
if (!vals.length) return null;
const first = vals.shift();
const head = new Node(node.val);
let curr = head;
let i = vals.length - 1
while ( i < vals.length) i++
{curr.next = new Node(vals[i])
curr = curr.next;}
return head
p
Array of any type (!null)
r
linked list of nodes (.val, .next || null)
  follow order of items in array
e
empty list (return null)
single list, return single item as node
p
(already have Node class)
*/

console.log(createLinkedList(["h", "e", "y"]), 'h -> e -> y' );
console.log(createLinkedList([]), null);

module.exports = {
  createLinkedList,
};
