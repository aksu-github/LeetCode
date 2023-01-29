/*
Instruction:

Given a string columnTitle that represents the column title 
as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

*/

//  My Solution - Very Dumb Way

/*
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        // res = res * 26 + columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        res = res * 26 + columnTitle.charCodeAt(i) - 64;
    }
  return res;
};


//  LeetCode - Lowest Memory Usage

var titleToNumber = function(columnTitle) {
    let num = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        num += (columnTitle[i].charCodeAt(0) - 64) * Math.pow(26, columnTitle.length - i - 1);
    }

    return num;
};

//  LeetCode - Fastest Runtime

var titleToNumber = function(columnTitle) {
    let answer = 0;
    for (let i = columnTitle.length - 1, k = 0; i >= 0; i--, k++) {
        answer += (columnTitle.charCodeAt(i) - 64) * (26**k);
    };
    return answer;
};