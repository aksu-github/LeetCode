/*
Instruction:

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

*/

/*  
*/




//  My Solution

/*
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let myObj = {};

  while ( n != 1 && !myObj[n] ){
      myObj[n] = true;
      n = n.toString().split('').reduce( (a,b) => a + b**2, 0);
  }
  return n === 1
};

//  LeetCode - Fastest Runtime

var isHappy = function (n, count = 0) {
  if (n === 1) {
    return true;
  } else if (n <= 3) {
    return false;
  }

  if(count > 20) {
      return false;
  }

  const numbers = String(n).split("");
  let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    sum += Number(numbers[index]) ** 2;
  }

  return isHappy(sum, count + 1);
};