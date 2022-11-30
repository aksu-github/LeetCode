/*
Instruction:

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

/*  Practiced on 11/29 
    Re-Did Using Regex

    Re-did Leetcode - Lowest Runtime
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

//  LeetCode - Lowest Runtime

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

//  LeetCode - Lowest Memory Usage

var isValid = function(s) {
  let stack_par = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
          stack_par.push(s[i]);
      } else {
          if (s[i] === "}" || s[i] === ")" || s[i] === "]") {
              if (stack_par.length == 0) {
                  return false;
              }
              let current = stack_par.pop();
              if ((s[i] === "}" && current != "{" )|| (s[i] === "]" && current != "[") || (s[i] === ")" && current != "(")) {
                  return false;
              }
          }
      }
  }
  return stack_par.length ? 0 : 1;
};