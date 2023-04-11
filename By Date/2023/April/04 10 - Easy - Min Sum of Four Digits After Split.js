/*
Instruction:

Example 1:

Input: num = 2932
Output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
Example 2:

Input: num = 4009
Output: 13
Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.

*/ 

/*  
*/


//  My Solution - Fastest Runtime + Lowest Memory Usage

/*
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let x = (''+num).split('').sort();
    return +(x[0] + x[2]) + +(x[1] + x[3]); 
};