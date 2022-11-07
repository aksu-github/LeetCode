/*
Instruction:

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.

*/

//  My Solution 

/*
 * @param {string[]} strs
 * @return {string}
*/

 let longestCommonPrefix = function(strs) {
  let res = '';

  let min = strs[0].length;
  let minLen =    Math.min(...strs.map( (_,i,a) => {
                                          if ( a[i].length < min ){
                                              min = a[i].length;
                                          }
                                          return min;
                                      })
                          )
  
  let index;
  for ( let i = 0; i < minLen; i++){
      index = strs[0][i];
      for ( j = 0; j < strs.length; j++){
          if ( strs[j][i] != index ){
              return res;
          }
      }
      res += index;
  }
  return res;
};
