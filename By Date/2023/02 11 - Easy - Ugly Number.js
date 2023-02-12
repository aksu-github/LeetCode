/*
Instruction:

An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.

*/

/*  
*/


//  My Solution


//  Works, but timesout
/*
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if ( n == 1 ){
        return true;
    }
    if ( n <= 0 ){
        return false;
    }
    const UGLY = [2,3,5];

    let factors = [],
        div = 2;

    while ( n >= 2 ){
        if ( n % div == 0 ){
            if ( !factors.includes(div) ){
                factors.push(div);
            }
            n = n / div;
        } else {
            div++;
        };
    };
    return factors.every( e => UGLY.includes(e))
};

//  LeetCode - Faster Runtime + Lowest Memory Usage

var isUgly = function(n) {
    if (n === 0) return false;
    
    while(n % 2 === 0) {
        n = n / 2;
    }
     while (n % 5 === 0) {
        n=n/5;
    }
    while (n % 3 === 0) {
        n = n / 3;
    }
    
    return n === 1;
};
