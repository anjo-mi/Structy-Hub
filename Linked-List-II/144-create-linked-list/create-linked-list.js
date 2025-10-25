class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (vals) => {
  if (!vals.length) return null;
  const head = new Node(vals.shift());
  let tail = head;
  for (const n of vals){
    tail.next = new Node(n);
    tail = tail.next
  }
  return head;
};

console.log(createLinkedList(["h", "e", "y"]), 'h -> e -> y' );
console.log(createLinkedList([]), null);

module.exports = {
  createLinkedList,
};
