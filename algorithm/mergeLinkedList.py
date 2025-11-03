from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        values = []
        dummy = ListNode()
        last = dummy

        while list1:
            values.append(list1.val)
            list1 = list1.next

        while list2:
            values.append(list2.val)
            list2 = list2.next

        sorted_list = sorted(values)

        for num in sorted_list:
            newNode = ListNode(num)
            last.next = newNode
            last = newNode

        return dummy.next