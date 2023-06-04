/*
Instruction:

Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Example 2:

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.


*/ 

/*  
*/

//  My Solution

/*
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  let res = [];
  for ( let i = 0; i < names.length; i++){
      res.push([names[i], heights[i]]);
  }
  res.sort((a,b) => b[1] - a[1]);
  return res.map( e => e[0])
};

//  LeetCode 

var sortPeople = function(names, heights) {
  let res = Array.from({length: names.length}, (_,i) => i );
  res.sort( (a,b) => heights[b] - heights[a]);
  return res.map( e => names[e]);
};