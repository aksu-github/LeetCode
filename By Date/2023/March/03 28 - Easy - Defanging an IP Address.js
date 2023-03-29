/*
Instruction:

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

*/ 

/*  
*/


//  My Solution - One of Fastest Runtime + One of Lowest Memory Usage

/*
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(/\./g, '[.]');
};