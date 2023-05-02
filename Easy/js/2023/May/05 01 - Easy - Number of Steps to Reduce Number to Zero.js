/*
Instruction:

Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, 
otherwise, you have to subtract 1 from it.

*/ 

/*  
*/

//  My Solution

/*
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let res = 0;
    let helper = x => {
        res++;
        if ( x == 0 ){
            return;
        } else if ( x % 2 == 0){
            helper( x / 2 )
        } else {
            helper( x - 1)
        }
    }
    helper(num);
    return --res;
};

//  LeetCode - Fastest Runtime

let numberOfSteps = function( num ){
    if ( num == 0 ) return 0;
    if ( num % 2 == 0 ) return numberOfSteps(num/2) + 1;
    return numberOfSteps( num-1 ) + 1;
}

//  LeetCode - Lowest Memory Usage - 1 big while loop with nested if else with counter outside