/*
Instruction:

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4

Explanation: 
s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:

Input: s = "RLRRRLLRLL"
Output: 2

Explanation: 
s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

*/ 

/*  
*/


//  My Solution

/*
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 1,
        res = 0;
    for ( let i = 1; i < s.length; i++){
        s[i] === s[0] ? count++ : count--;
        if ( count == 0){
            res++;
        }
    }
    return res;
};

//  LeetCode - Fastest Runtime + One of Lowest Memory Usage

var balancedStringSplit = function(s) {
    let arr = 0,
        countR = 0,
        countL = 0;
    for (let i=0; i<s.length; i++){
        if (s[i] === 'L'){
            countL++;
        }
        if (s[i] === 'R'){
            countR++;
        }
        if(countL === countR){
            arr++;
        }
    }
    return arr;
};

//  LeetCode - Lowest Memory Usage

var balancedStringSplit = function(s) {
    let balanceStatus = 0,
        count = 0;
     for (let i = 0; i < s.length; i++) {
       balanceStatus += (s[i] === 'R' ? 1 : -1);
       //   Boolean && used here 
       //   evaluates operands from left to right, 
       //   returning immediately with the value 
       //   of the first falsy operand it encounters; 
       //   if all values are truthy, the value of the last operand is returned.
       /*
            The AND operator preserves non-Boolean values and returns them as they are:

                result = "" && "foo"; // result is assigned "" (empty string)
                result = 2 && 0; // result is assigned 0
                result = "foo" && 4; // result is assigned 4
       */
       balanceStatus === 0 && count++
     }
     return count
   };