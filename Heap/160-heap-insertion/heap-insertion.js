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

  swap(i1,i2){
    [this.array[i1] , this.array[i2]] = [this.array[i2] , this.array[i1]];
  }

  siftUp(i){
    const pi = Math.floor((i - 1) / 2);
    if (this.array[i] < this.array[pi]){
      this.swap(i,pi);
      i = pi;
    }else return;
    this.siftUp(i);
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }
}


module.exports = {
  MinHeap,
};
