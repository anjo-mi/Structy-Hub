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
    if (!this.array.length) return null;
    console.log(this.array, "start")
    const root = this.array[0];
    this.array[0] = this.array.pop();
    let i = 0;
    while (i < this.array.length - 1){
      const leftInd = i * 2 + 1;
      const rightInd = i * 2 + 2;
      const leftVal = leftInd < this.array.length 
                          ? this.array[leftInd]
                          : Infinity;
      const rightVal = rightInd < this.array.length
                          ? this.array[rightInd]
                          : Infinity;
      const m = Math.min(leftVal,rightVal);
      const mi = m === rightVal ? rightInd : leftInd;
      console.log(this.array)
      console.log({leftInd,leftVal,rightInd,rightVal,m,mi},this.array[i])
      if (this.array[i] > m){
        [ this.array[i], this.array[mi] ] = [ this.array[mi], this.array[i] ]
        i = mi;
      }else break;
      console.log(this.array[i], "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxend of loop")
    }
    return root;
  }
}


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
