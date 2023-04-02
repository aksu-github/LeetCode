/*
Instruction:

There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, 
return the final value of X after performing all the operations.

*/ 

/*  
*/

//  My Solution

/*
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let neg = operations.filter( e => e.includes('--')).length,
        pos = operations.length - neg;
    return pos - neg;
};

//  LeetCode - Fastest Runtime

var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let operation of operations) {
        if(operation === '--X' || operation === 'X--') {
            x -= 1
        }
        else {
            x += 1
        }
    }

    return x;
};

//  LeetCode - Lowest Memory Usage

var finalValueAfterOperations = function(operations) {
    return operations.reduce((x, val) => {
        if (val == "--X" || val == "X--") x--;
        if (val == "++X" || val == "X++") x++;
        return x;
    }, 0)
};