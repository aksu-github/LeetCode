/*
Instruction:

Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

*/ 

/*  
*/

//  My Solution

/*
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let re = new RegExp(`^[${allowed}]+$`),
      c = 0;
  words.forEach( e => e.match(re) ? c++ : c );
  return c;
};

//  LeetCode - Lowest Memory Usage

var countConsistentStrings = function(allowed, words) {
  let count = 0;
  for(let i =0;i<words.length;i++){
      let bool = true;
      for(let j = 0;j<words[i].length;j++){
          if(allowed.indexOf(words[i][j])==-1){
              bool = false;
              break;
          }
      }
      if(bool)count++;
  }
  return count
};