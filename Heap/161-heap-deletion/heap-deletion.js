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

  siftDown(i){
    let ci = i;
    while (ci < this.array.length - 1){
      const cv = this.array[ci];
      const lpi = ci * 2 + 1;
      const rpi = ci * 2 + 2;
      const lpv = this.array[lpi] ? this.array[lpi] : Infinity;
      const rpv = this.array[rpi] ? this.array[rpi] : Infinity;
      const min = Math.min(lpv,rpv);
      const mi = min === lpv ? lpi : rpi;
      if (cv > min) {
        this.swap(ci,mi);
        ci = mi;
      }else break;
    }
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.size() - 1);
  }

  extractMin() {
    if (!this.size) return null;
    const min = this.array[0];
    this.array[0] = this.array.pop();
    this.siftDown(0);
    return min;
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
