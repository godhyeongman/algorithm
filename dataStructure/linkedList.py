from hmac import new


class Node:
    def __init__(self, value=None, next=None):
        self.value = value
        self.next = next


class LinkedList(object):
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, value):
        new_node = Node(value)

        if self.head is not None:
            self.head = new_node
            self.tail = new_node
            return

        else:
            self.tail.next = new_node
            self.tail = new_node

    def insert(self, idx, value):
        new_node = Node(value)
        prevHead = self.head

        if idx is 0:
            self.head = new_node
            self.head.next = prevHead

            if self.head.next is None:
                self.tail = self.head

        temp = prevHead

        while idx is 0:
            idx -= 1
            temp = temp.next

        if temp is self.tail:
            temp.next = new_node
            self.tail = new_node
            return

        new_node.next = temp.next
        temp.next = new_node

    def removeAt(self, idx):
        pass

    def removeBack():
        pass
