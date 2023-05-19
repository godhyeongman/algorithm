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
    }

    this.head.next = node;
    this.tail = node;
  }
}

const list = new SinglyLinkedList();

list.push(1);
console.log(list.head.value);
list.push(2);
console.log(list.head.value);
