/*
Instruction:

Given a string s, find the length of the longest 
substring without repeating characters.

 Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

//  LeetCode - O(N) Runtime

/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // keeps track of the most recent index of each letter.
    const seen = new Map();
    // keeps track of the starting index of the current substring.
    let start = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;
    
    for(let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLen = Math.max(i - start + 1, maxLen);
    } 
    
    return maxLen;  
};

//  LeetCode - Fastest Runtime

var lengthOfLongestSubstring = function(s) {
    const uniqueChars = new Set();
    let left = 0;
    let right = left;
    let maxLength = 0;

    while(right < s.length) {
        //Because we care about -contiguity-. once a duplicate is found
        //at position "right", we can no longer use the substring from position
        //"left" to the position of the first occurence of the duplicate character.
        //So, we need incrementing left (and deleting from uniqueChars to keep track
        //of a substring's uniqueness) until that occurence is found. Everything from
        //the position of the first occurence to position "right" is fine since they
        //will contain unique characters.
        while(uniqueChars.has(s.charAt(right))) {
            uniqueChars.delete(s.charAt(left));
            left++;
        }

        uniqueChars.add(s.charAt(right));
        maxLength = Math.max(maxLength, uniqueChars.size);
        right++;
    }
}