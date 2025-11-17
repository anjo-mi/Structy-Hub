class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (array) => {
  let head = null,
      tail = null;
  for (let i = 0 ; i < array.length ; i++){
    const n = new Node(array[i]);
    if (!head){
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
