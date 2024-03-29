/*
Instruction:

You are given a string s and an integer array indices of the same length. 
The string s will be shuffled such that the character at the ith 
position moves to indices[i] in the shuffled string.

Return the shuffled string.

Example 1:


Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"

Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

*/ 

/*  
*/


//  My Solution - Fastest Runtime + Lowest Memory Usage

/*
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res = new Array(s.length).fill('');
    for ( let i = 0; i < s.length; i++){
        res[indices[i]] = s[i]; 
    }
    return res.join('');
};