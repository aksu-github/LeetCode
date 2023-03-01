/*
Instruction:

Given an integer array nums, return true if any value appears 

at least twice in the array, and return false if every element is distinct.

*/

/*  
*/


//  My Solution

/*
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let myObj = {};

    for ( let i = 0; i < nums.length; i++){
        myObj[nums[i]] = (myObj[nums[i]] || 0 ) + 1;
    }
    for ( keys in myObj ){
        if ( myObj[keys] > 1 ){
            return true
        }
    }
    return false;
};

//  LeetCode - Fastest Runtime + Lowest Memory Usage

var containsDuplicate = function(nums) {
    const numsSet = new Set();
    for(let i = 0; i < nums.length; i++){
        if(numsSet.has(nums[i])) {
            return true;
        }
        numsSet.add(nums[i]);
    }
    return false;
};