class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        sLength = len(needle)
        cnt = 0

        for idx, char in enumerate(haystack):
            if cnt == sLength:
                return idx - (sLength)

            if needle[cnt] == char :
                cnt +=1
                continue

            cnt = 0

        if cnt == sLength: return 0
        return -1


print(Solution().strStr('sadbutsad', 'sad'))