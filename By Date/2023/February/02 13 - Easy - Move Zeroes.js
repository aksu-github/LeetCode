/*
Instruction:

Given an integer array nums, move all 0's to the end of 
it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

*/

/*  
*/


//  My Solution

/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;

    for ( let i = 0; i < nums.length; i++){
        if ( nums[i] !== 0 ){
            [nums[j], nums[i]] = [ nums[i], nums[j]];
            j++;
        }
    }
};