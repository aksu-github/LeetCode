/*
Instruction:

Given two strings s and t, 
return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the 
letters of a different word or phrase, typically using all the original letters exactly once.

*/

/*  
*/


//  My Solution

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if ( s.length != t.length ){
        return 0;
    }

    let counterArr = new Array(26).fill(0);

    for ( let i = 0; i < s.length; i++){
        counterArr[s.charAt(i).charCodeAt() - 97]++;
        counterArr[t.charAt(i).charCodeAt() - 97]--;
    }

    return counterArr.every( e => e == 0 );
};

//  LeetCode - One of Faster Runtimes

var isAnagram = function(s, t) {
    const isEqual = s.length === t.length;
    if (!isEqual) return false;

    const map = {};

    for (const char of s) {
        if (map[char]) {
            map[char] += 1;
        } else {
            map[char] = 1;
        }
    }

    for (const char of t) {
        if (map[char]) {
            map[char] -= 1;
        } else {
            return false;
        }
    }

    return true;
};

//  LeetCode - Lowest Memory Usage

var isAnagram = function(s, t) {
    if ( s.length != t.length ){
        return 0;
    }

    let counterArr = new Array(26).fill(0);

    for ( let i = 0; i < s.length; i++){
        counterArr[s.charCodeAt(i) - 97]++;
    }

    for ( let i = 0; i < t.length; i++){
        counterArr[t.charCodeAt(i) - 97]--;
    }

    for ( let i = 0; i < 26; i++){
        if ( counterArr[i] !== 0 ){
            return false;
        }
    }
    return true;
};