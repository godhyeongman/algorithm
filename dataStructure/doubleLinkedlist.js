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
      this.length++;
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
      this.length = 0;

      return currentTail;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;

    this.length--;

    currentTail.prev = null;
    return currentTail;
  }

  shift() {
    if (this.head === null) {
      return;
    }

    const currentHead = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return currentHead;
    }

    this.head = this.head.next;
    this.head.prev = null;

    this.length--;

    currentHead.next = null;
    return currentHead;
  }

  unShift(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
      return this;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    const isBiggerThanHalf = index > this.length / 2;

    if (isBiggerThanHalf) {
      let temp = this.tail;
      for (let i = this.length - 2; i >= index; i--) {
        temp = temp.prev;
      }

      return temp;
    }

    if (!isBiggerThanHalf) {
      let temp = this.head;

      for (let i = 1; i <= index; i++) {
        temp = temp.next;
      }

      return temp;
    }
  }

  set(index, value) {
    const target = this.get(index);
    if (!target) return false;

    target.value = value;

    return true;
  }
}

const list = new DoubleLinkedList();

list.push(1);
list.push(2);
list.unShift(0);

console.log(list.length);
console.log(list.head.value);
console.log(list.tail.value);
console.log(list.get(2));
console.log(list.set(3, 100));
console.log(list.get(2).value);
