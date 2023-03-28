/*
Instruction:

A decimal number is called deci-binary if each of its digits is either 
0 or 1 without any leading zeros. 

For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, 
return the minimum number of positive deci-binary numbers needed so that they sum up to n.

 

Example 1:

Input: n = "32"
Output: 3
Explanation: 10 + 11 + 11 = 32

*/ 

/*  
*/


//  My Solution

/*
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    return Math.max(...n);
};

//  LeetCode - Fastest Runtime

let minPartitions = function(n){
    for ( let i = 9; i > 0; i--){
        if ( n.indexOf(i) != -1 ){
            return i;
        }
    }
}