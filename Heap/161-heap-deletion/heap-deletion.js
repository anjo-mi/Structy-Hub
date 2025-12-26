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
    if (!this.array.length) return null;
    const first = this.array[0];
    this.array[0] = this.array.pop();
    this.siftDown(0);
    return first;
  }
}

const heap = new MinHeap();
heap.insert(12);
heap.insert(13);
heap.insert(11);
heap.insert(4);
heap.insert(20);
heap.insert(9);
heap.insert(22);
heap.insert(14);
console.log(heap.extractMin(), 4);
console.log(heap.extractMin(), 9);
console.log(heap.extractMin(), 11);

module.exports = {
  MinHeap,
};
