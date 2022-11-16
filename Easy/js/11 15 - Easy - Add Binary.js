/*
Instruction:

Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/

//  My Solution 

/*
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

//  Had to use BigInt() because some big numbers lose precision
 var addBinary = function(a, b) {
  let aBig = `0b${a}`;
  let bBig = `0b${b}`;
  return (BigInt(aBig)+BigInt(bBig)).toString(2);
};

//  Codewars - Fastest Runtime

var addBinary = function(a,b){
  return (BigInt(`0b${a}`)+BigInt(`0b${b}`)).toString(2);
}
