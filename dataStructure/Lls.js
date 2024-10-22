class Node {
  constructor(props) {
    this.value = props;
    this.next = null;
  }

  push(value) {
    this.next = new Node(value);
    return this.next;
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
      return;
    }

    this.tail.next = new Node(value);
    return this.tail;
  }
}

const lls = new LinkedList();

lls.push(1).push(2);

console.log(lls.head.next.value);
