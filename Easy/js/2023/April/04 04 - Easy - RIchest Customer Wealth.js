/*
Instruction:

You are given an m x n integer grid accounts where accounts[i][j] 
is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 

Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. 
The richest customer is the customer that has the maximum wealth.

*/ 

/*  
*/


//  My Solution

/*
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let res = 0;
    for ( let i = 0; i < accounts.length; i++){
        if ( accounts[i].reduce((a,b) => a + b, 0) > res){
            res = accounts[i].reduce((a,b) => a + b, 0);
        }
    }
    return res;
};

//  LeetCode - Fastest Runtime

let maximumWealth = function(accounts){
    let path = [];
    accounts.forEach( e => path.push(accounts.reduce((a,b) => a + b, 0)));
    return Math.max(...path);
}

//  LeetCode - Lowest Memory Usage

let maximumWealth = function(accounts){
    let res = 0;
    for ( let i = 0; i < accounts.length; i++){
        let temp = accounts.reduce((a,b) => a + b, 0);
        res = Math.max(res, temp);
    }
    return res;
}