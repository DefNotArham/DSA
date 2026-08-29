class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        s_map = {}
        t_map = {}

        for letter in s:
            s_map[letter] = s_map.get(letter, 0) + 1

        for letter in t:
            t_map[letter] = t_map.get(letter, 0) + 1

        return s_map == t_map
