/*
Instruction:

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

*/ 

/*  
*/

//  LeetCode

/*
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
addStrings = function(num1, num2) {
    sum = '';
    len1 = num1.length;
    len2 = num2.length;
    carry = 0;

    while(len1 > 0 || len2 > 0 || carry) {
        num1Digit = +num1.charAt(len1-1);   //  read num1 last digit as num type
        num2Digit = +num2.charAt(len2-1);   //  read num2 last digit as num type
        len1--;
        len2--;
        
        digitTotal = num1Digit + num2Digit + carry;
        carry = Math.floor(digitTotal / 10);    //  update carry if > 9
        digitToAppend = digitTotal % 10;
        sum = digitToAppend + sum;
    } 

    return sum;
};