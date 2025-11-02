class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
    const n = new Node(val);
    if (!this.head){
      this.head = n;
      this.tail = n;
    }else{
      this.tail.next = n;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  dequeue() {
    this.size--;
    const res = this.head.val;
    this.head = this.head.next;
    return res;
  }
}







module.exports = {
  Queue,
};
