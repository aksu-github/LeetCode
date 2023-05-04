/*
Instruction:

Given an integer num, return the number of digits in num that divide num.

An integer val divides nums if nums % val == 0.

*/ 

/*  
*/

//  My Solution - Fastest Runtime + 1 of Lowest Memory Usage

/*
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let num2Digit = num.toString().split(''),
        res = 0;
    for ( let i = 0; i < num2Digit.length; i++){
        if ( num % +num2Digit[i] == 0 ){
            res++;
        }
    }
    return res;
};