/*
Instruction:

Given an integer number n, return the difference between the product of its digits and the sum of its digits.

*/ 

/*  
*/


//  My Solution - One of Fastest Runtime + Lowest Memory Usage

/*
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = n.toString().split('')
        prod = arr.reduce( (a,b) => a * +b, 1),
        summed = arr.reduce( (a,b) => a + +b, 0);
    return prod - summed;
};

//  LeetCode - One of Fastest Runtime + Lowest Memory Usage

var subtractProductAndSum = function(n) {
    let mul = 1 ;
    let sum = 0;

    while(n != 0){
        let rem = n%10
        mul = mul * rem
        sum = sum + rem
        n = Math.floor(n/10)        
    }
    return mul - sum;

};

//  LeetCode - Lowest Memory Usage

var subtractProductAndSum = function(n) {
    let [mul, sum] = [1, 0],
        nStr = n.toString();

    for ( let digit of nStr){
        sum += +digit;
        mul *= +digit;
    }
    return mul - sum;

};