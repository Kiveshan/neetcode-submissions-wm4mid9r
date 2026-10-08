class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();

        for (const word of strs) {
            // 1. make a fresh array of 26 zeros
            const count: number[] = new Array(26).fill(0);
            // 2. loop over the letters of word, add 1 at each letter's index
            for (let i = 0; i < word.length; i++) {
                const position = word.charCodeAt(i) - 97;
                count[position]++;
            }
            // 3. turn the array into a string key with join(",")
            const wordKey: string = count.join(", ");
            // 4. if the map doesn't have the key yet, set it to []
            if (!groups.has(wordKey)) {
                groups.set(wordKey , []);
            }
            // 5. push word into the map's list for that key
            groups.get(wordKey)!.push(word);
        }

        return Array.from(groups.values());
    }
}
