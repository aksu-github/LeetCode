/*
Instruction:

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

*/ 

/*  
*/

//  My Solution - Lowest Memory Usage

/*
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let regex = /[aeiou]/ig,
        vowels = s.match(regex);
    return s.replace(regex, () => vowels.pop());
};

//  LeetCode - Fastest Runtime

function isVowel(l){
    return (
    l === "a" ||
    l === "A" ||
    l === "e" ||
    l === "E" ||
    l === "i" ||
    l === "I" ||
    l === "o" ||
    l === "O" ||
    l === "u" ||
    l === "U"
  );
 }
var reverseVowels = function(s) {
    
    let start = 0
    let end = s.length - 1
    s = s.split('')

    while(start < end){

        if(!isVowel(s[start])){
            start++
            continue
        }

        if(!isVowel(s[end])){
            end--
            continue
        }

        let temp = s[start]
        s[start] = s[end]
        s[end] = temp
        
        start++
        end--

    }

    return s.join('')
};