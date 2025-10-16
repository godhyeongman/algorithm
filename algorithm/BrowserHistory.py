from hmac import new


class Node:

    def __init__(self, value=None, next=None, prev=None):
        self.value = value
        self.next = next
        self.prev = prev


class BrowserHistory:
    def __init__(self) -> None:
        self.head = None
        self.tail = None

    def visit(self, url) -> None:
        newNode = Node(url)

        if self.head is None:
            self.head = newNode
            self.tail = newNode
            return self.tail.value

        newNode.prev = self.tail
        self.tail.next = newNode
        self.tail = newNode
        return self.tail.value

    def back(self, number):
        temp = self.tail

        while number > 0 and temp.prev is not None:
            number -= 1
            temp = temp.prev
        self.tail = temp

    def forward(self, number):
        temp = self.tail

        while number > 0 and temp.next is not None:
            number -= 1
            temp = temp.next

        self.tail = temp


test = BrowserHistory()
test.visit("1")
test.visit("2")
test.visit("3")
test.visit("4")

test.back(2)
test.forward(1)

test.visit("5")

print(test.tail.prev.value)
