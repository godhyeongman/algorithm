class Heap {
  constructor() {
    this.values = [];
  }

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
