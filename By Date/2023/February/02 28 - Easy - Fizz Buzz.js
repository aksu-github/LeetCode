/*
Instruction:

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

*/ 

/*  
*/

//  My Solution - Fastest Runtime

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = [];

    for ( let i = 1; i <= n; i++){
        if ( i % 3 == 0 && i % 5 == 0 ){
            res.push('FizzBuzz');
        } else if ( i % 3 == 0 ){
            res.push('Fizz');
        } else if ( i % 5 == 0 ){
            res.push('Buzz');
        } else {
            res.push(`${i}`)
        }
    }
    return res;
};

//  LeetCode - Lowest Memory Usage

var fizzBuzz = function (n) {
    let output = [];
    for (let i = 1; i <= n; i++) {
        let newString = '';
        if (i % 3 === 0) {
            newString += 'Fizz';
        }
        if (i % 5 === 0) {
            newString += 'Buzz';
        }
        output.push(newString.length ? newString : i.toString());
    }
    return output;
};