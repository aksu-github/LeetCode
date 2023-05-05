/*
Instruction:

You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.

 

Example 1:

Input: nums = [1,15,6,3]
Output: 9

Explanation: 

The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.

*/ 

/*  
*/

//  My Solution

/*
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let x = nums.reduce( (a,b) => a + b, 0),
        y = nums.reduce( (a,b) => a + b.toString().split('').reduce( (x,y) => x + +y, 0), 0);

    return Math.abs(x-y);
};

//  LeetCode - Fastest Runtime

var differenceOfSum = function(nums) {
    let totalSum = 0,
        digitSum = 0;

for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    totalSum += nums[i];

    while (num > 0) {
        digitSum += num % 10;
        num = Math.floor(num / 10);
    }
}

    return Math.abs(digitSum - totalSum);
};

//  LeetCode - Lowest Memory Usage

var differenceOfSum = function(nums) {
    let sum=0;
    let dsum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        let x=nums[i].toString();
        for(let j=0;j<x.length;j++){
            dsum+= +x[j];
        }
    }
    return Math.abs(sum-dsum)
};