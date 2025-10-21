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
    if (!this.head) {
      this.head = n;
      this.tail = n;
    }
    else{
      if(this.head === this.tail) {
        this.head.next = n;
      }
      else this.tail.next = n;
    }
    this.tail = n;
    this.size++;
  }

  dequeue() {
    if (!this.head) return null; // ?
    const ret = this.head;
    this.head = this.head.next;
    this.size--;
    return ret.val;
  }
}
/*

dequeue:
  if (!this.head) return null;
  this.head = head.next
  this.size--
  return head;
  
enqueue:
  if !this.head head = curr, tail = curr, size = 1
  else:
    while curr : prev = curr , curr = curr.next
  prev.next = new Node(val)
  this.size++
  this tail = that new node
  
given a constructor for Queue:
  create the enqueue and dequeue methods

enqueue: takes a value (will be made into a node)
  places it end of the list (new tail)
  (implicitly return undefined)
  add 1 to size
    ???? for consistency return size ????
dequeue: takes no parameter
  resets the linked list's / Queue's head to be the previously second val
  subtracts 1 from size
  return head of the list

dequeue on empty list ? 
enqueue on null (head and tail are same node)

  
*/




















module.exports = {
  Queue,
};
