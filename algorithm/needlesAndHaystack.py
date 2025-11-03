class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(needle) > len(haystack):
            return -1

        if len(needle) == len(haystack):
            if needle == haystack: return 0
            else: return -1

        for i in range(len(haystack) - len(needle)):
            comb = haystack[i: i + len(needle)]
            if comb == needle:
                return i

        return -1


print(Solution().strStr('a', 'a'))
