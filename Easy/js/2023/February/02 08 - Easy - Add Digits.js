/*
Instruction:

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

*/

/*  Practice 2/9
    Fastest Runtime + Lowest Memory -- Traced manually why % 9 works
*/


//  My Solution

/*
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return num <= 9 ? num : addDigits(num.toString().split('').map(Number).reduce( (a,b) => a + b, 0));
};

//  LeetCode - Fastest Runtime + Lowest Memory Usage

let addDigits = function(num) {
    if (num <= 9) {
        return num;
    }
    return num % 9 === 0 ? 9 : num % 9;
};