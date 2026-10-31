class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();
        let outputList: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            if (countMap.has(nums[i])) {
                countMap.set(nums[i], (countMap.get(nums[i]) ?? 0) + 1);
            } else {
                countMap.set(nums[i], 1);
            }
        }

        const countList = [...countMap];
        countList.sort((a, b) => b[1] - a[1]);

        for (let i = 0; i < k; i++) {
            outputList.push(countList[i][0]);
        }

        return outputList;
    }
}
