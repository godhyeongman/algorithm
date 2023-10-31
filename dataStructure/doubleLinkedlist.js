class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      return this;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;

    return this;
  }

  pop() {
    if (this.head === null) {
      return;
    }

    const currentTail = this.tail;

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
      return currentTail;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;

    this.length--;

    currentTail.prev = null;
    return currentTail;
  }
}

const list = new DoubleLinkedList();

console.log(list.head);
console.log(list.tail);
