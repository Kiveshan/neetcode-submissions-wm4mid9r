class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sMap = {}
        tMap = {}
        if len(s) != len(t) :
            return False

        for i in range(len(s)) :
            if s[i] in sMap :
                sMap[s[i]] += 1
            else:
                sMap[s[i]] = 1
            
            if t[i] in tMap :
                tMap[t[i]] +=1
            else:
                tMap[t[i]] = 1        

         
        if  sMap == tMap : 
            return True

        return False






        # 1. Put each word into a map that counts how many times that letter appears
        # 2. Go through 1 map and check if the second map has the exact same key value pair
        # 3. If something doesnt match immediate False if it passes return true        