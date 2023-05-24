/*
Instruction:

Example 1:

Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.

Example 2:

Input: s = "(1)+((2))+(((3)))"
Output: 3

*/ 

/*  
*/

//  My Solution

/*
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let count = 0,
      res = 0;
  for ( let i = 0; i < s.length; i++){
      if ( s[i] == '('){
          res = Math.max( res, ++count);
      } else if ( s[i] == ')'){
          count--;
      }
  }
  return res;
};