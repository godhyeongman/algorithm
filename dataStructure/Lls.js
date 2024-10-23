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
}

const lls = new LinkedList();

lls.push(1).push(2).push(3);
// const popped = lls.pop();
const shifited = lls.shift();

console.log(shifited.value, lls.head.value);

// console.log(lls.tail.value);
