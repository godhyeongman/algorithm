class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let tmp = new Node();
  let res = tmp;

  while (l1 || l2 || carry) {
    let total = carry;

    if (l1) {
      total += l1.value;
      l1 = l1.next;
    }
    if (l2) {
      total += l2.value;
      l2 = l2.next;
    }
    carry = Math.floor(total / 10);
    tmp.next = new Node(total % 10);
    tmp = tmp.next;
  }

  return res.next;
};

const testA = new Node(2, new Node(4, new Node(3)));
const testB = new Node(5, new Node(6, new Node(4)));

const res = addTwoNumbers(testA, testB);
console.log(res);
