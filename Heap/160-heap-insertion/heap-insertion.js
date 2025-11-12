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

  insert(val) {
    let index = this.array.length;
    this.array.push(val);
    while (index){
      const parentIndex = Math.floor((i - 1) / 2);
      if (this.array[parentIndex] > this.array[index]){
        [ this.array[index] , this.array[parentIndex] ] = [ this.array[parentIndex] , this.array[index] ];
      }
      else break;
      index = parentIndex;
    }
  }
}
/*
in all cases, push the new value to the end of the array
let index = this.array.length - 1;
while (index){
  const parentIndex = Math.floor((index - 1) / 2);
  if this.array[index] < this.array[parentIndex]  
    [ this.array[index] , this.array[parentIndex] ] = [ this.array[parentIndex] , this.array[index] ];
  else break;
  index = parentIndex;
}
return ???????
*/


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
