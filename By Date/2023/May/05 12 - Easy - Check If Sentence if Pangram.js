/*
Instruction:

*/ 

/*  
*/

//  My Solution

/*
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return alpha.every( e => sentence.includes(e));
};

//  LeetCode - Fastest Runtime

var checkIfPangram = function(s){
    return new Set(sentence).size == 26;
}