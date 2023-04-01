/*
Instruction:

Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.

Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. 
If there is no such element, leftSum[i] = 0.

rightSum[i] is the sum of elements to the right of the index i in the array nums. 
If there is no such element, rightSum[i] = 0.
Return the array answer.

 

Example 1:

Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

*/ 

/*  
*/


//  My Solution

/*
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let res = [];
    for ( let i = 0; i < nums.length; i++){
        let l = nums.slice(0,i).reduce((a,b) => a + b, 0),
            r = nums.slice(i+1,nums.length).reduce((a,b) => a + b, 0);
        res.push(Math.abs(l - r));
    }
    return res;
};

//  LeetCode - Fastest Runtime

var leftRigthDifference = function(nums) {
    let result = [];
    
    let left = 0;
    let right = 0;
    
    for (var i = 0; i < nums.length; i++) {
      right += nums[i];
    }
    
    for (var i = 0; i < nums.length; i++) {
      right -= nums[i];
      result.push(Math.abs(left - right));
      left += nums[i];
    }
    return result;
  };

  //   LeetCode - Lowest Memory Usage

  var leftRigthDifference = function(nums) {
    let leftsum = 0;
    let rightsum = 0;
    let totalsum = nums.reduce((a,b) => a + b, 0);
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        rightsum = totalsum - (leftsum + nums[i]);
        answer.push(Math.abs(leftsum - rightsum));
        leftsum += nums[i];
    }
    return answer;
};