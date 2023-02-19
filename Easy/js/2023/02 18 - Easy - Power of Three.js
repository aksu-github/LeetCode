/*
Instruction:

Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33

*/ 

/*  
*/

//  My Solution 

/*
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while ( n > 1 ){
        n /= 3 ;
    }
    return n == 1;
};

//  LeetCode - Faster Runtime

var isPowerOfThree = function(n) {
    if(n === 0) return false
    let ans = Math.log10(n)/Math.log10(3)
    return ans === Math.floor(ans)
};

//  LeetCode - Lowest Memory Usasge

var isPowerOfThree = function(n) {
    if(n<=0) return false;
    if(n==1) return true;
    return isPowerOfThree(n/3);    
};