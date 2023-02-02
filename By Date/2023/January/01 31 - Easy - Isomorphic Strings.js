/*
Instruction:

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character 
while preserving the order of characters. 

No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:

Input: s = "foo", t = "bar"
Output: false

Example 3:

Input: s = "paper", t = "title"
Output: true

*/

/*  
*/


//  My Solution

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if ( s.length !== t.length ){
        return false;
    }
    let myObj = {};

    for ( let i = 0; i < s.length; i++){
        if ( !myObj['s_'+s[i]]){
            myObj['s_'+s[i]] = t[i];
        }
        if ( !myObj['t_'+t[i]] )
        {
            myObj['t_'+t[i]] = s[i]; 
        }
        if ( t[i] != myObj['s_'+s[i]] || s[i] != myObj['t_'+t[i]] ){
            return 0;
        }
    }
    return true;
};

//  LeetCode - Fastest Runtime

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false;
        }
    }

    return true;
};

//  LeetCode - Lowest Memory Usage

function isIsomorphic(s,t){
    if (s.length !== t.length) return false;
    for(let i = 0; i <s.length; i++){
        let s1 = s.indexOf(s[i]);
        let t1 = t.indexOf(t[i]);
        if (t[s1] != t[i] || s[t1] != s[i]) return false;
    }
    return true;
}
