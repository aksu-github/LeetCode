/*
Instruction:

Given two strings ransomNote and magazine, 
return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/ 

/*  Mental trace of better solution
*/

//  My Solution

/*
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let avail = {};
    for ( let letter in magazine ){
        avail[magazine[letter]] = ++avail[magazine[letter]] || 1;
    }
    for ( let letter in ransomNote ){
        if ( !avail[ransomNote[letter]] ){
            return false;
        }
        avail[ransomNote[letter]]--;
    }
    return true
};

//  LeetCode - Fastest Solutions

//  Most Similar to my approach
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    for (let c of ransomNote) {
        if (map.has(c)) map.set(c, map.get(c) + 1);
        else map.set(c, 1);
    }
    for (let c of magazine) {
        if (map.has(c)) {
            map.set(c, map.get(c) - 1);
        } 
        if(map.get(c) === 0) {
            map.delete(c);
        }
    }
    return map.size === 0;
};

//  Using slice
var canConstruct = function(ransomNote, magazine) {
    return magazine.length >= ransomNote.length && [...ransomNote].every(c => {
        let i = magazine.indexOf(c);
        if (i >= 0) {
            magazine = magazine.slice(0, i) + magazine.slice(i + 1);
            return true;
        }
        return false;
    }
    );
};

//  Using replace to do length check of b4 and after
var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
        let origional = magazine.length;
        magazine = magazine.replace(ransomNote[i], '');
        if (origional === magazine.length) {
            return false;
        }
    };
    return true
};

//  Using every then use includes / replace
var canConstruct = function(ransomNote, magazine) {
    
    
    return ransomNote.split('').every(char=>{
        if(!magazine.includes(char)) {
            return false
            
        }else{
            magazine=magazine.replace(char,'')
            return true
        }
    })
    
};