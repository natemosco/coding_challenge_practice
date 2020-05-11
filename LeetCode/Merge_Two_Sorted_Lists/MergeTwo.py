class Solution(object):
    def mergeTwo(self, l1, l2):
        if l1 is None:
            return l2

        if l2 is None:
            return l1

        if l1.val <= l2.val:
            l1.next = self.mergeTwo(l1.next, l2)
            l1
        else:
            l2.next = self.mergeTwo(l2.next, l1)
            return l2

