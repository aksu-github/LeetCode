/*
Instruction:

Given an integer x, return true if x is a 
palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.


Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up: Could you solve it without converting the integer to a string?

*/

//  My Solution 

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

function isPalindrome(x){
    
  return x.toString().split('').reverse().join('') === x.toString();
}

/*  
  Leetcode - Follow up - No String Conversion

*/

function isPalindrome(x) {
    let reverse = 0;
    let copy = x;

    while (copy > 0) {
      const digit = copy % 10;
      reverse = reverse * 10 + digit;
      copy = ~~(copy / 10); //Math.floor(copy / 10)
    }

    return reverse == x;
};