/*
Instruction:

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

*/ 

/*  
*/

//  My Solution - Fast Runtime - Low Mem Usage

/*
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let res = 0;
  for ( let i = 0; i < nums.length; i++){
      for ( let j = i+1; j < nums.length; j++){
          if ( nums[i] == nums[j] ){
              res++;
          }
      }
  }
  return res;
};