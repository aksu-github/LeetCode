/*
Instruction:

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between 
a letter in pattern and a non-empty word in s.

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

*/

/*  
*/


//  My Solution

/*
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let matcher = new Map(),
        myStr = s.split(' ');

    if ( pattern.length !== myStr.length ){
        return false;
    }

    if ( new Set(myStr).size !== new Set(pattern).size ){
        return false;
    }

    for ( let i = 0; i < pattern.length; i++){
        if ( matcher.has(pattern[i]) && matcher.get(pattern[i]) !== myStr[i]){
            return false;
        }
        matcher.set( pattern[i], myStr[i]);
    }
    return true;
};