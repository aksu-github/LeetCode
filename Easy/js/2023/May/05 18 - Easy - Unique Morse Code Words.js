/*
Instruction:

Example 1:

Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".

*/ 

/*  
*/

//  My Solution - Fastest Runtime

/*
 * @param {string[]} words
 * @return {number}
 */

var uniqueMorseRepresentations = function(words) {
    const MORSE = {
        a: '.-', 
        b: '-...',   
        c: '-.-.', 
        d: '-..', 
        e: '.', 
        f: '..-.', 
        g: '--.', 
        h: '....', 
        i: '..',  
        j: '.---',  
        k: '-.-',  
        l: '.-..', 
        m: '--',
        n: '-.',  
        o: '---', 
        p: '.--.',  
        q: '--.-',  
        r: '.-.', 
        s: '...', 
        t: '-', 
        u: '..-', 
        v: '...-', 
        w: '.--', 
        x: '-..-',  
        y: '-.--', 
        z: '--..'
    }
    return new Set(words.map( e => e.split('').map( x => MORSE[x] ).join(''))).size;
};

//  LeetCode - Lowest Memory Usage

var uniqueMorseRepresentations = function (words) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const morzeAlphabet = [
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--..",
    ];
  
    const morzeWords = [];
  
    words.forEach((word) => {
      let morzeWord = "";
      for (let i = 0; i < word.length; i++) {
        let indexLatinSymbol = alphabet.indexOf(word[i]);
        morzeWord += morzeAlphabet[indexLatinSymbol];
      }
      morzeWords.push(morzeWord);
    });
  
    const morzeWordsSet = new Set(morzeWords);
    return morzeWordsSet.size;
  };