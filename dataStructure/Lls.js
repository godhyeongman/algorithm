class Node {
  constructor(props) {
    this.value = props;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;

      this.length++;

      return this;
    }

    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    this.length++;
    return this;
  }

  pop() {
    let current = this.head;
    let prev = null;
    if (!current) return;

    while (current) {
      if (!current.next) {
        this.length--;
        if (this.length === 0) {
          this.tail = null;
          this.head = null;
          return current;
        }

        this.tail = prev;
        return prev;
      }
      prev = current;
      current = current.next;
    }
  }

  shift() {
    if (!this.head) return;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this.head;
    }

    const temp = this.head;
    this.head = this.head.next;
    this.length--;

    return temp;
  }

  unshift(value) {
    const previousHead = this.head;
    this.head = new Node(value);
    this.head.next = previousHead;

    if (this.length === 0) {
      this.tail = this.head;
    }

    this.length++;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    let temp = this.head;

    while (!(index === 0)) {
      temp = temp.next;
      index--;
    }

    return temp;
  }

  set(index, value) {
    const node = this.get(index);

    if (!node) return null;

    node.value = value;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      this.unshift(value);
      return;
    }

    if (index === this.length) {
      this.push(value);
      return;
    }

    let temp = this.head;

    while (!(index === 1)) {
      temp = temp.next;
      index--;
    }

    const originalNode = temp.next;
    const newNode = new Node(value);

    temp.next = newNode;
    newNode.next = originalNode;

    this.length++;
  }

  reverse() {
    let node = this.head;

    this.head = this.tail;
    let next;
    let previous = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
  }
}

const lls = new LinkedList();

lls.push(1).push(2).push(3);
// const popped = lls.pop();
// const set = lls.set(3, 'last');

// lls.insert(0, -1);
//
lls.reverse();
const last = lls.get(lls.length - 1);

console.log(last.value, lls.head.value, lls.length);

class DoubledNode {
  constructor(props) {
    this.next;
    this.previos;
    this.value;
  }
}

class DoubleLinkedList {
  constructor(props) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }

  pop() {
    if (!this.head) return;
    const tail = this.tail;

    if (this.length === 1) {
      this.head === null;
      this.tail === null;
      this.length--;

      return tail;
    }

    const prev = this.tail.prev;

    prev.next = null;
    this.tail = prev;
    this.length--;
    tail.prev = null;

    return tail;
  }

  shift() {
    if (!this.head) return;

    const head = this.head;

    if (this.length === 1) {
      this.head === null;
      this.tail === null;
      this.length--;

      return head;
    }

    this.head = this.head.next;
    this.head.prev = null;

    head.next = null;
    this.length--;

    return head;
  }

  unShift(value) {
    const node = new Node(value);
    node.next = null;
    node.prev = null;
    if (!this.head) {
      this.head = node;
      this.tail = node;

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
    if (index < 0 || index >= this.length) return;

    const half = Math.floor(this.length / 2);

    let temp;
    let target;

    if (half < index) {
      temp = this.tail;
      target = this.length - 1;

      while (index !== target) {
        target--;
        temp = temp.prev;
      }

      return temp;
    }

    if (half >= index) {
      temp = this.head;
      target = 0;
      while (index !== target) {
        target++;
        temp = temp.next;
      }

      return temp;
    }
  }

  set(index, value) {
    const node = this.get(index);

    if (!node) return false;

    node.value = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return;

    if (index === 0) {
      this.unShift(value);
      return;
    }

    if (index === this.length - 1) {
      this.push(value);
      return;
    }

    const target = this.get(index);
    const node = new Node(value);

    node.next = target.next;
    target.next.prev = node;

    node.prev = target;
    target.next = node;

    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) return;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const target = this.get(index);

    target.prev.next = target.next;
    target.next.prev = target.prev;

    this.length--;
  }
}

const dls = new DoubleLinkedList();
dls.push(1);
dls.push(2);
dls.push(3);
dls.insert(2, 4);
dls.remove(1);

console.log(dls.get().value);
