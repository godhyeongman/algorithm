class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.size++;
  }

  dequeue() {
    if (!this.first) return;
    const dequeuedNode = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = dequeuedNode.next;
    this.size--;

    return dequeuedNode.value;
  }
}
