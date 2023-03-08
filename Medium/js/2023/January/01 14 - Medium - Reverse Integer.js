/*
Instruction:

Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

//  My Solution

/*
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let value = Math.abs(x).toString().split('').reverse().join('');
    if ( value > 2**31 ) {
        return 0;
    }
    return value * Math.sign(x);
  };

//  LeetCode - Fastest Runtime

var reverse = function(x) {
    const num =  Math.abs(x)
    let res = num.toString().split('').reverse().join('')
    if (res > 2**31-1) return 0
    return x < 0 ? res *= -1 : res
}

