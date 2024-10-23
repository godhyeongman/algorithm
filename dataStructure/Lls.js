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
    let targetIndex = this.length - 1;
    const temp = [];

    while (targetIndex >= 0) {
      const node = this.get(targetIndex);
      temp.push(node);

      targetIndex--;
    }
    console.log(temp.length);

    temp.forEach((el, idx) => {
      el.next = temp[idx + 1];
      if (idx === 0) el.next = null;
    });

    this.head = temp[0];
    this.tail = temp[temp.length - 1];
  }
}

const lls = new LinkedList();

lls.push(1);
// const popped = lls.pop();
// const set = lls.set(3, 'last');

// lls.insert(0, -1);
//
lls.reverse();
const last = lls.get(lls.length - 1);

console.log(last.value, lls.head.value, lls.length);
