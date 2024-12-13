class Heap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    let lastIndex = this.values.length - 1;
    let insertedIndex = Math.ceil((lastIndex - 1) / 2);

    while (this.values[lastIndex] > this.values[insertedIndex]) {
      if (insertedIndex < 0) break;

      const parentValue = this.values[insertedIndex];

      this.values[insertedIndex] = this.values[lastIndex];
      this.values[lastIndex] = parentValue;

      lastIndex = insertedIndex;
      insertedIndex = Math.ceil((lastIndex - 1) / 2);
    }

    return this.values;
  }
}

const heap = new Heap();

heap.insert(9);
heap.insert(1);
heap.insert(2);
heap.insert(10);

console.log(heap.values);
