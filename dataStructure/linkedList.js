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

  get(index, curr = this.head) {
    if (index >= this.length || index < 0) return null;

    if (index === 0) return curr;

    return this.get(index - 1, curr.next);
  }

  set(index, value) {
    const target = this.get(index);

    if (!target) return false;

    target.value = value;

    return true;
  }

  insert(index, value) {
    if (index > this.length || index < 0) return false;

    if (index === 0) {
      this.unShift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    const node = new Node(value);
    const targetPrev = this.get(index - 1);
    const targetNext = targetPrev.next;
    targetPrev.next = node;
    node.next = targetNext;

    this.length++;

    return true;
  }
}

const list = new SinglyLinkedList();
list.unShift(3);
list.unShift(1);

list.insert(1, 2);

console.log(list.head.value);
console.log(list.head.next.value);
console.log(list.head.next.next.value);
