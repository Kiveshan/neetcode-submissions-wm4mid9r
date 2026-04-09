class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        const charCountS = new Map()
        const charCountT = new Map()
        for(let i = 0 ; i < s.length; i++){
            charCountS.set(s[i], (charCountS.get(s[i]) || 0) + 1)
            charCountT.set(t[i], (charCountT.get(t[i]) || 0) + 1)
        }
        for(const[key,value] of charCountS){
            if(value !== charCountT.get(key)){
                return false
            }
        }
        return true
    }
}
