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

        if self.head is None:
            self.head = new_node
            self.tail = new_node
            return

        self.tail.next = new_node
        self.tail = new_node

    def insert(self, idx, value):
        new_node = Node(value)
        temp = self.head

        if idx == 0:
            if self.head is None:
                self.head = new_node
                self.tail = new_node
                return

            self.head = new_node
            self.head.next = temp
            return

        while idx > 0 and temp.next is not None:
            idx -= 1
            temp = temp.next

        if temp is self.tail:
            temp.next = new_node
            self.tail = new_node
            return

        new_node.next = temp.next
        temp.next = new_node

    def removeAt(self, idx):

        temp = self.head
        prev = None
        while idx > 0:
            idx -= 1
            prev = temp
            temp = temp.next

        if temp is self.tail:
            self.tail = prev
            prev.next = None
            return

        prev.next = temp.next

    def removeBack():
        pass
