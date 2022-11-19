/*
Instruction:

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

*/

//  My Solution 

/*
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  let [seed1, seed2] = [1, 1];

  if ( n == 1 || n == 2 ) return n;
  for (let i = 0; i < n; i++) {
      [seed1, seed2] = [seed2, seed1 + seed2];
  }
  return seed1;
};

//  Leetcode - Fastest Runtime

var climbStairs = function(n) {
  let temp,
      a = 1,
      b = 1;

  for (let i = 0; i < n; i++) {
    temp = a;
    a += b;
    b = temp;

  }
  return b;
};