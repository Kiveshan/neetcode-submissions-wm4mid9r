class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numberMap = new Map < number, number>
        for (let i = 0 ; i < nums.length ; i++){
            numberMap.set(nums[i] , i)
        }

        for (let i = 0 ; i < nums.length ; i++){
            let complement = target - nums[i]
            if (numberMap.has(complement) && numberMap.get(complement) !== i){
                return [i , numberMap.get(complement) ]
            }
        }

        return []

    }
}



        // for ( let i = 0 ; i < nums.length ; i++) {
        //     let complement = target - nums[i]
        //     if (nums.includes(complement)){
        //         return [i , nums.indexOf(complement)]
        //     }
        // }
        // return[]