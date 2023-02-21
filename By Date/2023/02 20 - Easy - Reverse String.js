/*
Instruction:

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

*/ 

/*  
*/

//  My Solution - Fastest Runtime

/*
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for ( let i = 0; i < s.length - i; i++){
        let temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
};

//  LeetCode - Lowest Memory Usage

var reverseString = function(s) {
    const mid = Math.floor(s.length  / 2)
    for (let l=0, r=s.length - 1; l < mid; l++, r--) { 
        [s[l], s[r]] = [s[r],s[l]]
    }
};