/*
Instruction:

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, 
which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Input: matrix = 
    [[1,2,3],
     [4,5,6],
     [7,8,9]]
Output: 
    [[7,4,1],
     [8,5,2],
     [9,6,3]]

*/ 

/*  
*/


//  LeetCode - Fastest Runtime

var rotate = function(matrix) {
    //  Transpose Matrix
    for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < matrix.length; j++){
            // let temp = matrix[i][j];
            // matrix[i][j] = matrix[j][i];
            // matrix[j][i] = temp;
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    //  Reverse each row of the transposed matrix
    
    // for(let m of matrix){
    //     // let first = matrix.shift();
    //     // matrix.push(first.reverse());
    //     m.reverse();
    // }
    for ( let i = 0; i < matrix.length; i++){
        matrix[i].reverse();
    }
};