/*
Instruction:

Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. 
In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

*/ 

/*  
*/

//  My Solution

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    return Number.isInteger(num ** (1/2))
};