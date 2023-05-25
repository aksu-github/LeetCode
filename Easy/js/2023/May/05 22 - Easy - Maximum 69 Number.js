/*
Instruction:

Example 1:

Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.

Example 2:

Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.

*/ 

/*  
*/

//  My Solution

/*
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  return +num.toString().replace('6','9');
};

//  LeetCode - Fastest Runtime - Lowest Memory Usage

var maximum69Number  = function(num) {

  let numArr = num.toString().split("")

  for (let i=0; i < numArr.length; i++){
      if (numArr[i] === "6"){
          numArr[i] = "9" 
          break
      }
  }

 return +numArr.join("");
};