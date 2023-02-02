/*
Instruction:

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

*/

//  My Solution - Very Dumb Way

/*
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let myObj = {};

    for ( let i = 0; i < nums.length; i++){
        myObj[nums[i]] = ( myObj[nums[i]] || 0 ) + 1;
    }

    let temp = 0;
    for ( keys in myObj ){
        if ( myObj[keys] > temp ) temp = myObj[keys];

    }
    for ( keys in myObj ){
        
        if ( myObj[keys] == temp ){
            return keys;
        }
    }
};

//  LeetCode - Fastest Runtime / Lowest Memory Usage

var majorityElement = function(nums) {
    const counts = {};
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > nums.length / 2) {
            return num;
        }
    }
};