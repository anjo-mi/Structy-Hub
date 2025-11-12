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
    }else {
      this.tail.next = n;
      this.tail = n;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) return null;
    const val = this.head.val;
    if (this.head === this.tail) this.tail = null;
    this.head = this.head.next;
    this.size--;
    return val;
  }
   
}







module.exports = {
  Queue,
};
