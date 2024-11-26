import { SinglyLinkedList } from './singleLinkedList';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return;
    }

    newNode.next = this.first;
    this.first = newNode;
  }
}
