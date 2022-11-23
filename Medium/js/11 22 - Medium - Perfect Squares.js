/*
Instruction:

Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, 
it is the product of some integer with itself. 

For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

 

Example 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.

*/

//  My Solution 



//  LeetCode - Dynamic + Lowest Memory Usage

/*
 * @param {number} n
 * @return {number}
 */

 function numSquares(n) {
  const dp = [0];
  
  for (let i = 1; i <= n; i++) {
    dp[i] = 10000;
    for (let j = 1; j*j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i-j*j]+1);
    } 
  }
  
  return dp[n];
}

//  LeetCode - Fastest Runtime Using Legrenge's Theorem

var numSquares = function(n) {
  //1//2//3//4
  if (Math.sqrt(n) == parseInt(Math.sqrt(n))) {
      return 1;
  }
  let hold = n;
  while (hold % 4 == 0) {
      hold = hold / 4;
  }
  if (hold % 8 == 7) {
      return 4;
  }
  let bigger = 1;
  while (bigger * bigger < n) {
      if (Math.sqrt(n - bigger * bigger) == parseInt(Math.sqrt(n - bigger * bigger))) {
          return 2;    
      }
      bigger ++;
  } 
  return 3;
};
