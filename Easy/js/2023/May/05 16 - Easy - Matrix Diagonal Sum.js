/*
Instruction:

Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

Example 2:

Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8

*/ 

/*  
*/

//  My Solution

/*
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let res = 0;
    for ( let i = 0, j = mat.length - 1; i < mat.length; i++, j--){
        if ( i == j ){
            res += mat[i][i];
        } else {
            res += ( mat[i][i] + mat[i][j] );
        }
    }
    return res;
};