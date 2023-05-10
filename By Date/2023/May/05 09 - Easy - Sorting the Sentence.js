/*
Instruction:

Input: s = "is2 sentence4 This1 a3"

Output: "This is a sentence"

Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

*/ 

/*  
*/

//  My Solution

/*
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return s.split(' ')
            .sort( (a,b) => a[a.length - 1] - b[b.length - 1], '')
            .map( e => e.slice(0,-1))
            .join(' ');
};

var sortSentence = function (s) {
    return s.split(' ')
    .sort( (a,b) => a[a.length - 1] - b[b.length - 1], '')
    .join(' ')
    .replace(/[0-9]/g, "");
  };

//  LeetCode - Fastest Runtime + Lowest Memory Usage

var sortSentence = function(s) {
    let result = [];
    wordArr = s.split(" ");
    
    for(let word of wordArr){
        let i = word.slice(-1);
        result[i-1] = word.substring(0,word.length-1)
        
        
    }
    return result.join(' ')
    
};

const sortSentence = function(s) {
    let result = [];
    s = s.split(" ");

    for (let i = 0 ; i < s.length; i++) {
        let placement = s[i][s[i].length - 1] - 1;
        result[placement] = s[i].slice(0, s[i].length - 1)
    }

    return result.join(' ');
};