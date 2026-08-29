class Solution:
    def hasDuplicate(self, nums) -> bool:
        seen = set()

        for num in nums:
            if num in seen:
                return True
            seen.add(num)

        return False


solution = Solution()
print(solution.hasDuplicate([1, 2, 3]))
print(solution.hasDuplicate([1, 2, 2, 3]))
