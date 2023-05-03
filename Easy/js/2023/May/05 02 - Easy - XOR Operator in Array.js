/*
Instruction:

You are given an integer n and an integer start.

Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.

 

Example 1:

Input: n = 5, start = 0
Output: 8

Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.

*/ 

/*  
*/

//  My Solution

/*
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = new Array(n).fill(start).map( (e,i) => e = e + 2 * i);
    
    return arr.reduce( (a,b) => a ^ b, 0);
};

//  LeetCode - Fastest Runtime + Lowest Runtime

var xorOperation = function(n, start) {
    let nums = 0
   
    for (let i = 0; i < n; i++){
        nums = nums ^ (start + i * 2)
    }
    return nums
};