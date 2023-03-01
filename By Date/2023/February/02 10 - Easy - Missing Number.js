/*
Instruction:

Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

*/

/*  
*/


//  My Solution

/*
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let myNums = nums.sort( (a,b) => a - b);
    for ( let i = 0; i < myNums.length; i++){
        if ( i != myNums[i] ){
            return i;
        }
    }
    return myNums.length;
};

//  LeetCode - Fastest Runtime + Lowest Memory Usage

var missingNumber = function(nums) {
    let number = nums.length;
    for(let i = 0; i< nums.length; i++){
        number = number + i - nums[i] 
    }
    return number;
  }