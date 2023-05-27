/*
Instruction:

*/ 

/*  
*/

//  My Solution - Low Memory Usage

/*
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let sortNums = nums.sort( (a,b) => a - b, 0);
    return sortNums[sortNums.length - 1] * sortNums[sortNums.length - 2] - sortNums[0] * sortNums[1];
};

//  LeetCode - Fastest Runtime

//  splice() changes original array
//  slice() doesnt change original array
var maxProductDifference = function(nums) {
    let largest = Math.max(...nums);
    nums.splice(nums.indexOf(largest), 1);
    largest *= Math.max(...nums);
    
    let smallest = Math.min(...nums);
    nums.splice(nums.indexOf(smallest), 1);
    smallest *= Math.min(...nums);

    return largest - smallest;
};