/*
Instruction:

Example 1:

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1*,2*,2,1]
- [1*,2,2*,1]
- [1,2*,2,1*]
- [1,2,2*,1*]

Example 3:

Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3*,2,1*,5,4]
- [3*,2,1,5*,4]
- [3,2*,1,5,4*]

*/ 

/*  
*/

//  My Solution - Fastest Runtime + Lowest Memory Usage

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let res = 0;
    for ( let i = 0; i < nums.length; i++){
        for ( let j = i+1; j < nums.length; j++){
            if ( Math.abs( nums[i] - nums[j] ) == k ){
                res++;
            }
        }
    }
    return res;
};