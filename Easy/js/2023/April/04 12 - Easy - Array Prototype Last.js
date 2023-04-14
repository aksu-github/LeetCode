/*
Instruction:

Write code that enhances all arrays such that you can call the array.last() 
method on any array and it will return the last element. 

If there are no elements in the array, it should return -1.
 

Example 1:

Input: nums = [1,2,3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.

*/ 

/*  
*/


//  My Solution

Array.prototype.last = function() {
    return this.at(-1) ?? -1;
};

//  LeetCode - Fastest Runtime + Lowest Memory Usage

Array.prototype.last = function() {
    if ( this.length == 0 ){
        return -1;
    }
    return this[this.length - 1];
};