class Node:

    def __init__(self, value=None, next=None, prev=None):
        self.value = value
        self.next = next
        self.prev = prev


class BrowserHistory:
    def __init__(self) -> None:
        self.maxAt = None
        self.insertAt = None
        self.head = None
        self.tail = None

    def visit(self, url) -> None:
        newNode = Node(url)
        if self.head is None and self.tail is None:
            self.head = newNode
            self.tail = newNode
            self.insertAt = 1
            self.maxAt = 1
            return

        if self.maxAt == self.insertAt:
            newNode.prev = self.tail
            self.tail.next = newNode
            self.tail = newNode
            self.insertAt += 1
            self.maxAt += 1
            return

        sholudStartTail = self.maxAt / 2 < self.insertAt

        idx = 0
        temp = None

        if sholudStartTail:
            temp = self.tail
            while idx + self.insertAt != self.maxAt:
                idx += 1
                temp = temp.prev

        else:
            temp = self.head
            while idx == self.insertAt:
                idx += 1
                temp = temp.next

        newNode.prev = temp
        temp.next = newNode
        self.tail = newNode
        self.maxAt = self.insertAt + 1
        self.insertAt += 1

    def back(self, number):
        diff = self.insertAt - number

        if diff < 0:
            self.insertAt = None
            self.maxAt = None
            self.head = None
            self.tail = None
            return

        self.insertAt = diff

    def forward(self, number):

        diff = self.insertAt + number

        if diff >= self.maxAt:
            self.insertAt = self.maxAt

        self.insertAt = diff


test = BrowserHistory()
test.visit("1")
test.visit("2")
test.visit("3")
test.visit("4")

test.back(3)
test.forward(1)
test.visit("5")

# print(test.head.next.next.next.value)
