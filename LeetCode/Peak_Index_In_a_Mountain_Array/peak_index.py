class Solution(object):
    def peakIndex(self, A):

        lower = 0
        higher = len(A) - 1

        while lower < higher:
            middle = (lower + higher) // 2

            if A[middle] > A[middle + 1]:
                return middle

            lower = middle

        return middle
