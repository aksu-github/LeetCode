/*
Instruction:

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

//  My Solution 

/*
 * @param {string} s
 * @return {boolean}
*/

let isValid = function(s) {
    let regex = /(\(\)|\[\]|\{\})/g;

    while ( regex.test(s) ){
        s = s.replace(regex,'');
    }
    
    return !s;
};

//  Leetcode - Lowest Runtime

let isValid = function(s) {
    const left = [];
    const legend = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        left.push(s[i]);    
      } else if (legend[left.pop()] !== s[i]) {
        return false;
      }
    }
    return left.length ?  0 : 1;
  };