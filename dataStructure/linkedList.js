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
}

const list = new SinglyLinkedList();

list.push(1);
console.log(list.length);
list.push(2);
console.log(list.head.next.value);
list.push(3);
console.log(list.head.next.next.value);
console.log(list.length);
console.log(list.tail.value);
