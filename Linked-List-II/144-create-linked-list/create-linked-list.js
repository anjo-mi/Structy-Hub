class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (vals) => {
  let head = null,
      tail = null;
  for (const v of vals){
    const n = new Node(v);
    if (!head) {
      head = n;
      tail = n;
    }else{
      tail.next = n;
      tail = tail.next;
    }
  }
  return head;
};

console.log(createLinkedList(["h", "e", "y"]), 'h -> e -> y' );
console.log(createLinkedList([]), null);

module.exports = {
  createLinkedList,
};
