/*
Instruction:

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 

*/

//  My Solution - 1 of Fastest Runtime

/*
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = '';

    while ( columnNumber ){
        let rem = ( columnNumber - 1 ) % 26;
        columnNumber = ( columnNumber - 1 - rem ) / 26;
        res = String.fromCharCode(65 + rem) + res;
    }
    return res;
};

//  LeetCode - Lowest Memory Usage

const convertToTitle = function(columnNumber) {
    
    let result = "";
    let number = columnNumber;
  
    while (number > 0) {
      
      let remainder = (number-1) % 26;
  
      let letter = String.fromCharCode("A".charCodeAt(0) + remainder);
  
      result = letter + result;
      
      number = Math.floor((number-1) / 26);
    }
  
    return result;
  };
