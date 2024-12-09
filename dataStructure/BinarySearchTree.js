class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let isLeaf = false;
    let currentNode = this.root;

    while (!isLeaf) {
      if (currentNode.value > value) {
        if (!currentNode.left) {
          isLeaf = true;
          currentNode.left = newNode;
          continue;
        }

        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        if (!currentNode.right) {
          isLeaf = true;
          currentNode.right = newNode;
        }

        currentNode = currentNode.right;
      }
    }
  }

  find(value) {
    let currentNode = this.root;
    let isTarget = false;
    while (!isTarget) {
      if (currentNode === null) return null;
      if (value === currentNode.value) return currentNode;

      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      }
    }
  }

  bfs(target) {
    const queue = [];
    queue.push(this.root);

    while (queue.length !== 0) {
      console.log(queue);
      const shifted = queue.shift();
      const value = shifted.value;
      if (value === target) return shifted;

      if (shifted.left) queue.push(shifted.left);
      if (shifted.right) queue.push(shifted.right);
    }

    return null;
  }
}

const bst = new BinarySearchTree();

bst.insert(1);
bst.insert(4);
bst.insert(3);

const result = bst.bfs(3);
result;
