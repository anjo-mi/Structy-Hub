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



const heap = new MinHeap();
heap.insert(12);
heap.insert(93);
heap.insert(63);
heap.insert(16);
heap.insert(-500);
heap.insert(21);
heap.insert(11);
heap.insert(43);
heap.insert(-6);
heap.insert(35);
heap.insert(15);
heap.insert(37);
heap.insert(29);
heap.insert(-501);
heap.insert(80);
console.log({heap});
//                              -501
//                      /                \
//                    -6                -500
//                 /     \            /       \
//               12      15          29        11
//             /  \     /  \       /  \       /  \
//            93  43   35  16    63   37     21  80


// [ -501, -6, -500, 12, 15, 29, 11, 93, 43, 35, 16, 63, 37, 21, 80 ]

module.exports = {
  MinHeap,
};
