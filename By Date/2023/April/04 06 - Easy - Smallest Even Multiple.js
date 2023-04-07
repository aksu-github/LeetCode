/*
Instruction:

Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

*/ 

/*  
*/


//  My Solution

/*
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    return n % 2 == 0 ? n : n * 2;
};

//  LeetCode - Fastest Runtime

const smallestEvenMultiple=n=>n%2===0?n:n*2;