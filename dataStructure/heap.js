class Heap {
  constructor() {
    this.values = [];
  }

  // insert(value) {
  //   this.values.push(value);
  //
  //   let lastIndex = this.values.length - 1;
  //   let insertedIndex = Math.ceil((lastIndex - 1) / 2);
  //
  //   while (this.values[lastIndex] > this.values[insertedIndex]) {
  //     if (insertedIndex < 0) break;
  //
  //     const parentValue = this.values[insertedIndex];
  //
  //     this.values[insertedIndex] = this.values[lastIndex];
  //     this.values[lastIndex] = parentValue;
  //
  //     lastIndex = insertedIndex;
  //     insertedIndex = Math.ceil((lastIndex - 1) / 2);
  //   }
  //
  //   return this.values;
  // }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const value = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (value <= parent) break;

      this.values[parentIdx] = value;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

const heap = new Heap();

heap.insert(9);
heap.insert(1);
heap.insert(2);
heap.insert(10);
heap.insert(11);
heap.insert(3);
heap.insert(4);

heap.insert(5);

console.log(heap.values);
