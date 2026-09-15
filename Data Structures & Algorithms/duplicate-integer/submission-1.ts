class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numberSet = new Set<number>(nums);
        if (numberSet.size !== nums.length){
            return true

        }

        return false

    }
}
