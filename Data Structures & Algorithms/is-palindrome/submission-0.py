class Solution:
    def isPalindrome(self, s: str) -> bool:
        formattedString = re.sub(r'[^a-z0-9]', '', s.lower())
        left, right = 0, len(formattedString) - 1

        while left < right :
            if formattedString[left] != formattedString[right]:
                return False
            left +=1
            right -=1
        
        return True
        