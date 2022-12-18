/*
Instruction:

Given an integer numRows, return the first numRows of Pascal's triangle.

*/

/*  Practiced on 12/17
    Fastest Runtime Solution
*/

//  My Solution 

/*
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];

    for ( let i = 0; i < numRows; i++){
        let row = [];

        for ( let j = 0; j <= i; j++){
            if ( j == 0 || j == i ){
                row.push(1);
            } else {
                row.push( res[i-1][j-1] + res[i-1][j] );
            }
        }
        res.push(row);
    }
    return res;
    
};

//  Cleaner Version of My Solution - Also Lowest Memory Usage and Runtime
var generate = function(numRows) {
    var pascal = [];
    for (var i = 0; i < numRows; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for (var j = 1; j < i; j++) {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
        pascal[i][i] = 1;
    }
    return pascal;
};