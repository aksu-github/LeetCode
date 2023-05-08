/*
Instruction:

You are given the strings key and message, which represent a cipher key and a secret message, respectively. 
The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.

For example, given key = "happy boy" 
(actual key would have at least one instance of each letter in the alphabet), 
we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

Return the decoded message.

Example 1:


Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
Output: "this is a secret"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".

*/ 

/*  
*/

//  My Solution

/*
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, msg) {
    let res = "",
        mapper = {},
        count = 97;

    key = key.split(" ").join("")
    
    for ( let i = 0; i < key.length; i++){
        if( !mapper[key[i]]){
            mapper[key[i]] = count;
            count++;
        }
    }
    // for(let i of key){
    //     if(!mapper[i]){
    //         mapper[i] = count
    //         count+=1
    //     }  
    // }

    for ( let i = 0; i < msg.length; i++){
        res += mapper[msg[i]] ? String.fromCharCode(mapper[msg[i]]) : ' ';
    }
    // for(let i of msg){
    //     res+= mapper[i] ? String.fromCharCode(mapper[i]) : " "
    // }

    return res;
};

//  LeetCode - Lowest Memory Usage

var decodeMessage = function (key, message) {
    let result = '';
    key = [...new Set(key)].filter(x => x !== ' ');

    [...message].forEach(v => (v === ' ') ? result += ' ' : result += String.fromCharCode(97 + key.indexOf(v)));

    return result;
};