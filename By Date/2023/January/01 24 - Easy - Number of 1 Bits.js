/*
Instruction:

Count number of 1's in a given bit number

*/

/*  
*/




//  My Solution

/*
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  return (n>>>0).toString(2).split('').filter(e => e == 1 ).length
};

//  LeetCode - Fastest Runtime & Lowest Memory Usage

var hammingWeight = function(n) {
  var count = 0;
  for(var i = 0; i<=31; i++){
      if(((n>>i)&1) === 1){
          count++;
      }
  }
  return count;
};