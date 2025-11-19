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


const kSmallest = (nums, k) => {
  const h = new MinHeap();
  for (const num of nums) h.insert(num);
  const mink = [];
  while (mink.length < k){
    mink.push(h.extractMin());
  }
  return mink;
};

/*
make an Min_Heap_Array to make the heap with
iterate thru the given array
  inserting val to heap
make a lowest array
while that array.length < k
  (because 1 less than k, means itll reach k on the last iteration)
  add the extractMin val to iterate
return it
*/





console.log(kSmallest([
  43, 35, 62, 31, 86, 81, 58, 80, 91, 13, 54, 78, 
  75, 69, 60, 8, 22, 12, 30, 79, 100, 2, 64, 57, 
  11, 55, 7, 68, 66, 14, 45, 26, 83, 24, 28, 76, 
  34, 89, 37, 32, 41, 88, 20, 82, 59, 4, 40, 9, 
  74, 23
], 5), [2, 4, 7, 8, 9]);

module.exports = {
  kSmallest,
};
