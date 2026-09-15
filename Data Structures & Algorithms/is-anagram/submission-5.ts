class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false
        }
        const firstWordHashMap = new Map< string,number >
        const secondWordHashMap = new Map < string , number >

        for(let i = 0 ; i < s.length ; i++){
            if(!firstWordHashMap.has(s[i])){
                firstWordHashMap.set(s[i], 1)
            } else {
                firstWordHashMap.set(s[i], (firstWordHashMap.get(s[i]) || 0) + 1);
            }

        
            if(!secondWordHashMap.has(t[i])){
                secondWordHashMap.set(t[i], 1)
            } else {
                secondWordHashMap.set(t[i], (secondWordHashMap.get(t[i]) || 0) + 1);
            }
        
        }
       console.log(firstWordHashMap)
       console.log(secondWordHashMap)
        for (const [key, val] of firstWordHashMap.entries()) {
            if (!secondWordHashMap.has(key) || secondWordHashMap.get(key) !== val) {
                return false;
            }
        }

    return true;   

    }
}