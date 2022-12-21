/*
Instruction:

A phrase is a palindrome if, 
after converting all uppercase letters 
into lowercase letters and removing all 
non-alphanumeric characters, 
it reads the same forward and backward. 

Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

//  My Solution 

/*
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let regex = /[^a-zA-Z0-9]/g,
        myStr = s.replace(regex,'').toLowerCase();

    return myStr == myStr.split('').reverse().join('')
};

//  LeetCode - no reverse function

var isPalindrome = function(s) {
    let str = s.match(/[A-Za-z0-9]/g);

	if (str === null) {
		return true;
	}

	str = str.join("").toLowerCase();

	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
			return false;
		}
	}

	return true;
};