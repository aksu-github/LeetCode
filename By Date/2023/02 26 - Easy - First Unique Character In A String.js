/*
Instruction:

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

*/ 

/*  
*/

//  My Solution

/*
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for ( let i = 0; i < s.length; i++){
        if ( s.indexOf(s[i]) == s.lastIndexOf(s[i])){
            return i;
        }
    }
    return -1;
};

//  LeetCode - Lowest Memory Usage

var firstUniqChar = function(s) {
    for ( let i = 0; i < s.length; i++){
        if ( s.indexOf(s[i]) && s.indexOf(s[i], i+1) == -1){
            return i;
        }
    }
    return -1;
};