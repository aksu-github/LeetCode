/*
Instruction:

*/ 

/*  
*/

//  My Solution - Fastest Runtime - Lowest Mem Usage

/*
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(' ').map( e => e.split('').reverse().join('')).join(' ');
    return sArr;
};