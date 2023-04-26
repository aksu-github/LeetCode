/*
Instruction:

Example 1:

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]

Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]

*/ 

/*  
*/


//  My Solution - Fastest Runtime + Lowest Memory Usage

/*
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let res = [];
    for ( let i = 0; i < nums.length; i++){
        res.splice(index[i],0,nums[i])
    }
    return res;
};