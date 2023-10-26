class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.length++;
      return;
    }

    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  pop() {
    if (this.length === 0) return;

    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  shift() {
    if (this.head === null) return;

    const currentHead = this.head;

    this.head = currentHead.next;
    this.length--;

    if (!currentHead.next) {
      this.tail = null;
    }

    return currentHead;
  }

  unShift(value) {
    const currentHead = this.head;
    const node = new Node(value);

    if (!currentHead) {
      this.head = node;
      this.tail = node;
    }

    this.head = node;
    this.head.next = currentHead;

    this.length++;
  }

  get(value, curr) {
    if (value >= this.length || value < 0) return null;

    if (!curr) curr = this.head;

    if (value === 0) return curr;

    return this.get(value - 1, curr.next);
  }
}

const list = new SinglyLinkedList();
list.unShift('addMe');
list.unShift(100);

const a = list.get(0);
console.log(a);
