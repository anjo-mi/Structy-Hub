class MinHeap {
  constructor() {
    this.array = [];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  size() {
    return this.array.length;
  }

  swap(idx1, idx2) {
    [this.array[idx1], this.array[idx2]] = [this.array[idx2], this.array[idx1]];
  }

  siftUp(idx) {
    let currentIdx = idx;
    while (currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      if (this.array[currentIdx] < this.array[parentIdx]) {
        this.swap(currentIdx, parentIdx);
        currentIdx = parentIdx;
      } else {
        break;
      } 
    }
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.size() - 1);
  }

  extractMin() {
    // console.log(this.array);
    const root = this.array.shift();
    const tempRoot = this.array.pop();
    this.array = [tempRoot].concat(this.array);
    // console.log(this.array);
    let i = 0;
    while (i < this.array.length - 1){
      const rightChildInd = i * 2 + 2;
      const rightChildVal = rightChildInd >= this.array.length ? Infinity : this.array[rightChildInd];
      const leftChildInd = i * 2 + 1;
      const leftChildVal = leftChildInd >= this.array.length ? Infinity : this.array[leftChildInd];
      if (this.array[i] > rightChildVal|| this.array[i] > leftChildVal){
        const minInd = Math.min(rightChildVal,leftChildVal) === rightChildVal ? rightChildInd : leftChildInd;
        this.swap(i,minInd);
        i = minInd;
      }else break;
    }
    return root;
  }
}
/*
the build suggests that NO MATTER WHAT, the lowest value will be the first element in EVERY case
(if !arr.length) return null;
- shift the array and store that value to be returned
- pop that array and place that element at the front of the array
- index = 0 (duh)
- while index < arr.length - 1 ->
    - get children (index * 2 + 1)
    - get children (index * 2 + 2)
    - if arr[index] < either child, find the min and swap positions
      - make sift down method that mirrors sift up
    - if not: break
return initially shifted value
*/

const heap = new MinHeap();
heap.insert(12);
heap.insert(93);
heap.insert(63);
heap.insert(16);
heap.extractMin(); // -> 12
heap.extractMin(); // -> 16
heap.insert(-500);
heap.insert(21);
heap.insert(11);
heap.insert(43);
heap.insert(-6);
heap.insert(35);
heap.insert(15);
heap.extractMin(); //-> -500
heap.extractMin(); //-> -6
heap.extractMin(); // -> 11
heap.extractMin(); // -> 15
heap.extractMin(); // -> 21
heap.extractMin(); // -> 35
heap.extractMin(); // -> 43
heap.extractMin(); // -> 63
heap.extractMin(); // -> 93
console.log({heap});
module.exports = {
  MinHeap,
};
