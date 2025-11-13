class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (vals) => {
  if (!vals.length) return null;
  const head = new Node(vals.shift())
  let tail = head,
      i = 0;
  while (i < vals.length){
    tail.next = new Node(vals[i]);
    tail = tail.next;
    i++;
  }
  return head;
};

console.log(createLinkedList(["h", "e", "y"]), 'h -> e -> y' );
console.log(createLinkedList([]), null);

module.exports = {
  createLinkedList,
};
