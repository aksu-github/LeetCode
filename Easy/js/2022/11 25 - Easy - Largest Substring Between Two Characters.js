/*
Instruction:

Given a string s, return the length of the longest substring 
between two equal characters, 
excluding the two characters. 

If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.

Example 2:

Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".

Example 3:

Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.

*/

//  My Solution 

/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {
  let myVal = [],
      myKey = [],
      objCounter = {},
      c = [],
      sum = 0;

  s.split('').forEach( e => objCounter[e] = ( objCounter[e] || 0 ) + 1 );

  myVal = Object.values(objCounter);
  myKey = Object.keys(objCounter)

  for ( let i = 0; i < myVal.length; i++ ){
      sum += myVal[i];
      if ( myVal[i] > 1 ){
          let temp = s.indexOf(`${myKey[i]}`)
          for ( let j = temp+1; j < s.length; j++){
              if ( myKey[i] == s[j] ){
                  c.push(j - temp - 1);
              }
          }
      }
  }
  return myVal.length == sum ? -1 : Math.max(...c);
};

//  LeetCode - Fastest Runtime

var maxLengthBetweenEqualCharacters = function(s) {
  const n = s.length;
  const start = new Array(26).fill(-1);
  let max = -1;
  
  for (let i = 0; i < n; i++) {
      const index = s.charAt(i).charCodeAt(0) - 97;
      
      if (start[index] === -1) start[index] = i;
      else max = Math.max(max, i - start[index] - 1);        
  }
  
  return max;

  
};

//  LeetCode - Lowest Memory Usage

var maxLengthBetweenEqualCharacters = function(s) {
  let max = -1;
  
  for(i = 0; i < s.length; i++) {
      for(j = s.length - 1; j > i; j--) {
          if(s[i] === s[j]) {
              max = Math.max(max, j - i - 1);
          }
      }
  }
  
  return max;
};