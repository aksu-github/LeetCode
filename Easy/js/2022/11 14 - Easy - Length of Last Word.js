/*
Instruction:

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

*/

//  My Solution 

/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length;
};

var lengthOfLastWord = function(s) {
    let myArr = s.trim().split(' ');
    return myArr[myArr.length-1].length;
};

//  LeetCode - Fastest Runtime

var lengthOfLastWord = function(s) {
    let split = s.split(' ')
    for(let i = 0; i < split.length; i++){
      if(split[i].length === 0){
        split.splice(i, 1)
        i--
      }
    }
    return split[split.length - 1].length
  };